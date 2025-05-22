import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const UserList = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [users, setUsers] = useState([
    {
      id: "1",
      name: "John Doe",
      phoneNumber: "1234567890",
      email: "john@example.com",
      gender: "male",
      address: "123 Main St",
      profileImg:
        "https://www.roumortodox.org/wp-content/uploads/2025/04/2504211.jpg",
      password: "password123",
      dateOfBirth: "1990-01-01",
      role: "servant",
      AttendencePoints: 0,
      attPoints: 0,
      totalPoints: 0,
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      phoneNumber: "0987654321",
      email: "jane@example.com",
      gender: "female",
      address: "456 Elm St",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSi7j_jdY9sY_IzhcPugwWjOtq7I2LHt-Jow&s",
      password: "password123",
      dateOfBirth: "1995-05-15",
      role: "admin",
      AttendencePoints: 0,
      attPoints: 0,
      totalPoints: 0,
      status: "active",
    },
    {
      id: "3",
      name: "Alice Johnson",
      phoneNumber: "5551234567",
      email: "alice@example.com",
      gender: "female",
      address: "789 Oak St",
      profileImg:
        "https://i.pinimg.com/474x/51/36/9d/51369dee08c31a12920e3e7d26f03e29.jpg",
      password: "password123",
      dateOfBirth: "1992-03-30",
      role: "user",
      AttendencePoints: 0,
      attPoints: 0,
      totalPoints: 0,
      status: "active",
    },
    {
      id: "4",
      name: "Bob Brown",
      phoneNumber: "5559876543",
      email: "bob@example.com",
      gender: "male",
      address: "101 Pine St",
      profileImg:
        "https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg",
      password: "password123",
      dateOfBirth: "1988-07-22",
      role: "user",
      AttendencePoints: 0,
      attPoints: 0,
      totalPoints: 0,
      status: "active",
    },
    {
      id: "5",
      name: "Charlie Davis",
      phoneNumber: "5556543210",
      email: "charlie@example.com",
      gender: "male",
      address: "202 Maple St",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOLBRK-3wEFFeCojWlHou4nooggl5iI2PJQ&s",
      password: "password123",
      dateOfBirth: "1990-12-12",
      role: "user",
      AttendencePoints: 0,
      attPoints: 0,
      totalPoints: 0,
      status: "active",
    },

    // Add more users here...
  ]);

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

      <div className="hidden lg:block overflow-auto">
        <table className="min-w-full bg-white dark:bg-gray-600 rounded shadow">
          <thead className="bg-primary-light dark:bg-primary-dark text-white">
            <tr>
              <th
                className="border p-3 cursor-pointer"
                onClick={() => toggleSort("id")}
              >
                ID
              </th>
              <th
                className="border p-3 cursor-pointer"
                onClick={() => toggleSort("name")}
              >
                User
              </th>
              <th className="border p-3">Phone</th>
              <th
                className="border p-3 cursor-pointer"
                onClick={() => toggleSort("email")}
              >
                Email
              </th>
              <th
                className="border p-3 cursor-pointer"
                onClick={() => toggleSort("status")}
              >
                Status
              </th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 transition">
                <td className="border p-2 text-center">{user.id}</td>
                <td className="border p-2 flex items-center gap-3">
                  <img
                    src={user.profileImg}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="border p-2 text-center">{user.phoneNumber}</td>
                <td className="border p-2 text-center">{user.email}</td>
                <td className="border p-2 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "active"
                        ? "bg-green-400 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="border p-2 text-center">
                  <button
                    className="bg-indigo-200 hover:text-indigo-800 px-4 py-1 rounded shadow mx-2"
                    onClick={() => handleEdit(user)}
                  >
                    {t("edit")}
                  </button>
                  <button
                    className="bg-red-400 hover:text-red-800 px-4 py-1 rounded shadow mx-2"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    {t("delete")}
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
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

      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[600px] max-h-[90vh] overflow-y-auto space-y-4 shadow-lg">
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
              { label: "Role", key: "role" },
              { label: "Status", key: "status" },
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

export default UserList;
