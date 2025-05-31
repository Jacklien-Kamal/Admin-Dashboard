import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { LuCircleX } from "react-icons/lu";

const MeetingsList = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      await fetch("data/users.json")
        .then(async (res) => {
          const data = await res.json();
          if (data) {
            setLoading(false);

            setUsers(data);
            localStorage.setItem("users", JSON.stringify(data));
          } else {
            console.log("no response");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUsers();
  }, []);

  localStorage.setItem("users", JSON.stringify(users));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser({ ...user }); // Make a copy for editing
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setUsers(users.map((u) => (u.id === selectedUser.id ? selectedUser : u)));
    setIsModalOpen(false);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((u) => u.id !== selectedUser.id));
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortKey) return 0;
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === "string") {
        return sortOrder === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }
      return 0;
    });

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded-md shadow-sm w-64"
          />
          <Link
            to="/users/create"
            className="bg-primary-light hover:bg-opacity-70 dark:bg-primary-dark text-white px-4 py-2 rounded shadow"
          >
            + Add User
          </Link>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="hidden  border  rounded-xl shadow lg:block overflow-auto">
            <table className="min-w-full table-fixed bg-white dark:bg-gray-600">
  <thead className="bg-primary-light dark:bg-primary-dark text-white">
    <tr>
      <th className="p-3 border text-center w-12 cursor-pointer" onClick={() => toggleSort("id")}>ID</th>
      <th className="p-3 border text-left w-64 cursor-pointer" onClick={() => toggleSort("name")}>User</th>
      <th className="p-3 border text-center w-40">Phone</th>
      <th className="p-3 border text-center w-64 cursor-pointer" onClick={() => toggleSort("email")}>Email</th>
      <th className="p-3 border text-center w-32 cursor-pointer" onClick={() => toggleSort("status")}>Status</th>
      <th className="p-3 border text-center w-64">Meetings Attended</th>
      <th className="p-3 border text-center w-40">Actions</th>
    </tr>
  </thead>
  <tbody>
    {filteredUsers.map((user) => (
      <tr key={user.id} className="hover:bg-gray-100 transition">
        <td className="p-2 border text-center">{user.id}</td>
        <td className="p-2 border flex items-center gap-3">
          <img src={user.profileImg} alt={user.name} className="w-10 h-10 rounded-full" />
          <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline">{user.name}</Link>
        </td>
        <td className="p-2 border text-center">{user.phoneNumber}</td>
        <td className="p-2 border text-center">{user.email}</td>
        <td className="p-2 border text-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-700"}`}>
            {user.status}
          </span>
        </td>
        <td className="p-2 border text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium text-gray-700 dark:text-white">
              {user.meetings.filter((m) => m.attended).length} / {user.meetings.length} (
              {Math.round((user.meetings.filter((m) => m.attended).length / user.meetings.length) * 100)}%)
            </span>
            <progress
              className="w-full progress-bar"
              value={user.meetings.filter((m) => m.attended).length}
              max={user.meetings.length}
            />
          </div>
        </td>
        <td className="p-2 border text-center space-x-2">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded shadow"
            onClick={() => handleEdit(user)}
          >
            {t("edit")}
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow"
            onClick={() => {
              setSelectedUser(user);
              handleDeleteUser();
            }}
          >
            {t("delete")}
          </button>
        </td>
      </tr>
    ))}
    {filteredUsers.length === 0 && (
      <tr>
        <td colSpan={7} className="text-center p-4 text-gray-500">
          No users found.
        </td>
      </tr>
    )}
  </tbody>
</table>

          </div>
          <div className="block md:hidden space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={user.profileImg}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-contain"
                  />
                  <div>
                    <h2 className="font-bold">{user.name}</h2>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <p>
                  <strong>Phone:</strong> {user.phoneNumber}
                </p>

                <p>
                  <strong>Status:</strong>
                  <span
                    className={`ml-1 px-2 py-1 rounded-full text-xs ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </p>
                <button
                  className="mt-3 text-indigo-600 hover:underline"
                  onClick={() => handleEdit(user)}
                >
                  {t("edit")}
                </button>
                <button
                  className="mt-3 text-indigo-600 hover:underline"
                  onClick={handleDeleteUser}
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] max-h-[90vh] overflow-y-auto space-y-4 shadow-lg">
            <button
              className="  text-primary-light hover:text-gray-700 text-3xl"
              onClick={() => setIsModalOpen(false)}
            >
              <LuCircleX />
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Edit User</h2>

            <img
              src={selectedUser.profileImg}
              alt="Profile"
              className="w-32 h-32 border border-gray-500 rounded-full mx-auto"
            />
            {[
              { label: "Profile Image URL", key: "profileImg" },
              { label: "Name", key: "name" },
              { label: "Email", key: "email" },
              { label: "Phone Number", key: "phoneNumber" },
              { label: "Address", key: "address" },
              { label: "Date of Birth", key: "dateOfBirth", type: "date" },
              { label: "Gender", key: "gender" },
              { label: "Attendance Points", key: "attPoints" },
              { label: "Performance Points", key: "attendancePoints" },
              { label: "Total Points", key: "totalPoints" },
            ].map(({ label, key, type = "text" }) => (
              <div key={key}>
                <label className="block font-medium mb-1">{label}</label>
                <input
                  type={type}
                  name={key}
                  value={selectedUser[key]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>
            ))}
            <label className="block font-medium mb ">{selectedUser.name} Meetings</label>
            <select className="w-full border border-gray-300 p-2 rounded-md" name="meetingId" >
              {selectedUser.meetings.filter((meeting) => (meeting.attended===true)).map((meeting) => (
                <option key={meeting.id} value={meeting.id}>
                  {meeting.title}
                </option>
              ))}
            </select>
            <label className="block font-medium mb-1">Status</label>
            <select
              name="status"
              value={selectedUser.status}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <label className="block font-medium mb-1">Role</label>
            <select
              name="role"
              value={selectedUser.role}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="servant">Servant</option>
            </select>
            <div className="flex justify-end gap-4 pt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleDeleteUser}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingsList;
