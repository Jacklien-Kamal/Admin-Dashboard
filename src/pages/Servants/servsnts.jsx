import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGridPro } from '@mui/x-data-grid-pro';

// Updated servant data
const servants = [
  {
    id: "1",
    name: "John Doe",
    phoneNumber: "1234567890",
    email: "john@example.com",
    gender: "male",
    address: "123 Main St",
    profileImg: "https://www.roumortodox.org/wp-content/uploads/2025/04/2504211.jpg",
    dateOfBirth: "1990-01-01",
    role: "servant",
    status: "active",
    group: "Youth Service",
    serviceType: "Youth Meetings",
    lastServed: "2025-05-10",
    evaluationNotes: "Excellent engagement with youth group.",
    supervisor: "Fr. Michael",
    users: [
      { id: "u1", name: "Mark Hanna", gender: "male", age: 17 },
      { id: "u2", name: "Mary Gerges", gender: "female", age: 16 }
    ],
    meetings: [
      { id: "m1", title: "Youth Meeting - Discipleship", date: "2025-05-01", attended: true },
      { id: "m2", title: "Spiritual Retreat", date: "2025-04-15", attended: true },
      { id: "m3", title: "Spiritual Retreat", date: "2025-04-15", attended: false },
      { id: "m4", title: "Youth Meeting - Fellowship", date: "2025-05-05", attended: true },
      { id: "m5", title: "Youth Meeting - Outreach", date: "2025-05-08", attended: false },
      { id: "m6", title: "Youth Meeting - Prayer", date: "2025-05-12", attended: true },
      { id: "m7", title: "Youth Meeting - Bible Study", date: "2025-05-15", attended: true },
      { id: "m8", title: "Youth Meeting - Worship", date: "2025-05-18", attended: false }
    ]
  },
  {
    id: "2",
    name: "Joseph smai",
    phoneNumber: "1234567890",
    email: "Joseph@example.com",
    gender: "male",
    address: "123 Main St",
    profileImg: "https://www.roumortodox.org/wp-content/uploads/2025/04/2504211.jpg",
    dateOfBirth: "1990-01-01",
    role: "servant",
    status: "active",
    group: "Youth Service",
    serviceType: "Youth Meetings",
    lastServed: "2025-05-10",
    evaluationNotes: "Excellent engagement with youth group.",
    supervisor: "Fr. Michael",
    users: [
      { id: "u1", name: "Mark Hanna", gender: "male", age: 17 },
      { id: "u2", name: "Mary Gerges", gender: "female", age: 16 }
    ],
    meetings: [
      { id: "m1", title: "Youth Meeting - Discipleship", date: "2025-05-01", attended: true },
      { id: "m2", title: "Spiritual Retreat", date: "2025-04-15", attended: true },
      { id: "m3", title: "Spiritual Retreat", date: "2025-04-15", attended: true },
      { id: "m4", title: "Youth Meeting - Fellowship", date: "2025-05-05", attended: true },
      { id: "m5", title: "Youth Meeting - Outreach", date: "2025-05-08", attended: true },
      { id: "m6", title: "Youth Meeting - Prayer", date: "2025-05-12", attended: true },
      { id: "m7", title: "Youth Meeting - Bible Study", date: "2025-05-15", attended: true },
      { id: "m8", title: "Youth Meeting - Worship", date: "2025-05-18", attended: true }
    ]
  },
  {
    id: "3",
    name: "Jane Smith",
    phoneNumber: "0987654321",
    email: "jane@example.com",
    gender: "female",
    address: "456 Elm St",
    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSi7j_jdY9sY_IzhcPugwWjOtq7I2LHt-Jow&s",
    dateOfBirth: "1995-05-15",
    role: "servant",
    status: "active",
    group: "Children's Ministry",
    serviceType: "Sunday School",
    lastServed: "2025-05-19",
    evaluationNotes: "Reliable and proactive.",
    supervisor: "Sr. Maria",
    users: [
      { id: "u3", name: "Peter Adel", gender: "male", age: 10 },
      { id: "u4", name: "Mina Adel", gender: "male", age: 10 },
      { id: "u5", name: "Moheb Adel", gender: "male", age: 10 },
      { id: "u6", name: "Amir Adel", gender: "male", age: 10 }
    ],
    meetings: [
      { id: "m1", title: "Youth Meeting - Discipleship", date: "2025-05-01", attended: true },
      { id: "m2", title: "Spiritual Retreat", date: "2025-04-15", attended: true },
      { id: "m3", title: "Spiritual Retreat", date: "2025-04-15", attended: false },
      { id: "m4", title: "Youth Meeting - Fellowship", date: "2025-05-05", attended: false },
      { id: "m5", title: "Youth Meeting - Outreach", date: "2025-05-08", attended: false },
      { id: "m6", title: "Youth Meeting - Prayer", date: "2025-05-12", attended: false },
      { id: "m7", title: "Youth Meeting - Bible Study", date: "2025-05-15", attended: true },
      { id: "m8", title: "Youth Meeting - Worship", date: "2025-05-18", attended: true }
    ]
  }
];

// Generate rows from servants
const rows = servants.map((servant) => {
  const total = servant.meetings.length;
  const attended = servant.meetings.filter(m => m.attended).length;

  return {
    id: servant.id,
    img: servant.profileImg,
    name: servant.name,
    phone: servant.phoneNumber,
    email: servant.email,
    group: servant.group,
    users: servant.users,
    serviceType: servant.serviceType,
    supervisor: servant.supervisor,
    lastServed: servant.lastServed,
    attendance: { attended, total }
  };
});

// Column definitions
const columns = [
  {
    field: 'img',
    headerName: '',
    width: 60,
    renderCell: (params) => <Avatar alt="Profile" src={params.value} />,
    sortable: false,
    filterable: false,
  },
  { field: 'name', headerName: 'Name', width: 160 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'supervisor', headerName: 'Supervisor', width: 140 },
  { field: 'lastServed', headerName: 'Last Served', width: 120 },
  {
    field: 'users',
    headerName: 'Users',
    width: 200,
    renderCell: (params) => {
      const users = params.value.map(user => user.name).join(', ');
      return (
        <select>
            {params.value.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      );
    },
    sortable: false,
    filterable: false
  },
  {
    field: 'attendance',
    headerName: 'Attendance',
    width: 220,
    renderCell: (params) => {
      const { attended, total } = params.value;
      const percentage = (attended / total) * 100;

      return (
        <Box sx={{ width: '100%' }}>
          <Typography variant="body2" sx={{ fontSize: 12 }}>
            {`${attended}/${total} (${percentage.toFixed(1)}%)`}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={percentage}
            color='secondary'
            sx={{ height: 6, borderRadius: 4, mt: 0.5 }}
          />
        </Box>
      );
    },
    sortable: false,
    filterable: false,
  }
];

// Main component
export default function ServantList() {
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        rowHeight={60}
      />
    </Box>
  );
}
