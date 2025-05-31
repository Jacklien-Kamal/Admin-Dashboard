import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ServantList() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const res = await fetch("data/servants.json");
        const data = await res.json();
        if (data) {
          setUsers(data);
          localStorage.setItem("servants", JSON.stringify(data));
        } else {
          console.log("no response");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const rows = users.map((servant) => {
    const total = servant.meetings?.length || 0;
    const attended = servant.meetings?.filter((m) => m.attended).length || 0;

    return {
      id: servant.id,
      img: servant.profileImg,
      name: servant.name,
      phone: servant.phoneNumber,
      email: servant.email,
      group: servant.group,
      users: servant.users || [],
      serviceType: servant.serviceType,
      supervisor: servant.supervisor,
      lastServed: servant.lastServed,
      attendance: { attended, total }
    };
  });

  const columns = [
    {
      field: 'img',
      headerName: '',
      width: 60,
      renderCell: (params) => <Avatar alt="Profile" src={params.value} />,
      sortable: false,
      filterable: false,
    },
    { field: 'name', headerName: 'Name', width: 160,renderCell: (params) => (<Link to={`/servants/${params.id}`}>{params.value}</Link>)},
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'supervisor', headerName: 'Supervisor', width: 140 },
    { field: 'lastServed', headerName: 'Last Served', width: 120 },
    {
      field: 'users',
      headerName: 'Users',
      width: 200,
      renderCell: (params) => (
        <select>
          {params.value.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      ),
      sortable: false,
      filterable: false
    },
    {
      field: 'attendance',
      headerName: 'Attendance',
      width: 220,
      renderCell: (params) => {
        const { attended, total } = params.value;
        const percentage = total > 0 ? (attended / total) * 100 : 0;

        return (
          <Box sx={{ width: '100%' }}>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              {`${attended}/${total} (${percentage.toFixed(1)}%)`}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={percentage}
              color="secondary"
              sx={{ height: 6, borderRadius: 4, mt: 0.5 }}
            />
          </Box>
        );
      },
      sortable: false,
      filterable: false,
    }
  ];

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        rowHeight={60}
        loading={loading}
      />
    </Box>
  );
}
