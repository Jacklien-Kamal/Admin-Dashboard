import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgressSVG from "./circularProgress";

export default function UserDetails() {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(null);
  const [tabValue, setTabValue] = useState(0); // tab index

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    const user = usersData.find((user) => user.id === id);
    setCurrentUser(user);
  }, [id]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    switch (tabValue) {
      case 0:
        return (
          <div className=" rounded-2xl shadow bg-white p-6">
            <h3 className="text-lg font-semibold mb-4 dark:text-black">{currentUser.name}</h3>
            <ul className="space-y-2">
              <label className="text-gray-500">Name:</label>
              <li
                key="name"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {" "}
                <p className="dark:text-black"> {currentUser.name}</p>
              </li>
              <label className="text-gray-500">Email:</label>
              <li
                key="email"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {" "}
                <p className="dark:text-black"> {currentUser.email}</p>
              </li>
              <label className="text-gray-500">Phone:</label>
              <li
                key="phone"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {" "}
                <p className="dark:text-black"> {currentUser.phoneNumber}</p>
              </li>
              <label className="text-gray-500">Address:</label>
              <li
                key="address"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {" "}
               <p className="dark:text-black"> {currentUser.address}</p>
              </li>
              <label className="text-gray-500">Date of Birth:</label>
              <li
                key="dob"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {" "}
               <p className="dark:text-black"> {currentUser.dateOfBirth}</p> 
              </li>
              <label className="text-gray-500">Role:</label>
              <li
                key="role"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {" "}
               <p className="dark:text-black"> {currentUser.role}</p>
              </li>
              <label className="text-gray-500">Status:</label>
              <li
                key="status"
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                {" "}
                <p className="dark:text-black">{currentUser.status}</p>
              </li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className=" rounded-2xlshadow bg-white p-6 grid grid-cols-1  gap-4">
            <h3 className="text-lg font-semibold mb-4">Points</h3>
            <ul className=" dark:text-black">
              <label className="text-gray-500">Attendance Points:</label>
              <li
                key="attPoints"
                className="w-full border text-black  border-gray-300 p-2 rounded-md"
              >
                {" "}
                {currentUser.attPoints}
              </li>
              <label className="text-gray-500">Performance Points:</label>
              <li
                key="perfPoints"
                className="w-full border  dark:text-black  border-gray-300 p-2 rounded-md"
              >
                {" "}
                {currentUser.attendancePoints}
              </li>
              <label className="text-gray-500">Total Points:</label>

              <li
                key="TotalPoints"
                className="w-full border  dark:text-black  border-gray-300 p-2 rounded-md"
              >
                {" "}
                {currentUser.totalPoints}
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="rounded-2xl shadow bg-white p-6">
            <h3 className="text-lg font-semibold mb-4  dark:text-black">Exams</h3>
            <ul className="space-y-2  dark:text-black">
              <li>📄 resume.pdf</li>
              <li>📊 performance-review.xlsx</li>
              <li>📎 security-policy.docx</li>
            </ul>
          </div>
        );
      case 3:
        return (
          <div className="rounded-2xl shadow bg-white p-6">
            <h3 className="text-lg font-semibold mb-4  dark:text-black">Meetings</h3>
            <ul className="space-y-2  dark:text-black">
              {currentUser.meetings.filter((meeting)=>(meeting.attended===true)).map((m)=>{
                 return <li className="p-3 shadow my-4 rounded-md hover:bg-secondary-body cursor-pointer" key={m.id}>📅 {m.title} - {m.date}</li>;
              })}
            
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {currentUser ? (
        <div className=" dark:text-black p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            <Link
              to="/users"
              className="flex items-center text-gray-500 hover:text-black"
            >
              <span className="mr-2">←</span> Back
            </Link>
            
            <div className="text-center p-6 rounded-2xl shadow bg-white">
             <div className="text-center p-6 rounded-2xl shadow bg-white">
  <div className="relative w-28 h-28 mx-auto">
    {/* Circular Progress */}
    <CircularProgressSVG
  value={
    (currentUser.meetings.filter((m) => m.attended).length /
      currentUser.meetings.length) *
    100
  }
/>


    {/* Profile Image */}
    <div className="w-24 h-24 bg-secondary-body rounded-full overflow-hidden mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img
        src={currentUser.profileImg}
        alt={currentUser.name}
        className="w-full h-full object-cover"
      />
    </div>
  </div>

</div>

              <h2 className="mt-4 text-xl font-semibold">{currentUser.name}</h2>
              <p className="text-gray-500">{currentUser.role}</p>
              <div className="mt-6 text-left">
                <Box sx={{ borderRight: 1, borderColor: "divider" }}>
                  <Tabs
                    orientation="vertical"
                    value={tabValue}
                    onChange={handleTabChange}
                  >
                    <Tab label="Details" />
                    <Tab label="Points" />
                    <Tab label="Exams" />
                    <Tab label="Meetings" />
                  </Tabs>
                </Box>
              </div>
            </div>
          </div>

          {/* Right Panel changes based on selected tab */}
          <div className="md:col-span-2 space-y-6">{renderTabContent()}</div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-500">User not found</p>
        </div>
      )}
    </div>
  );
}
