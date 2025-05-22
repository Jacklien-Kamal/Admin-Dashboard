import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(usersData);
    const user = usersData.find((user) => user.id === id);
    setCurrentUser(user);
  }, [id]);

  console.log(users);
  console.log(currentUser);
  console.log(typeof id);

  return (
    <div>
      {currentUser && (
      <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="space-y-6">
          <Link to="/users" className="flex items-center text-gray-500 hover:text-black">
            <span className="mr-2">←</span> Back
          </Link>
          <div className="text-center p-6 rounded-2xl shadow bg-white">
            <div className="w-24 h-24 mx-auto rounded-full ">
              <img
                src={currentUser.profileImg}
                alt={currentUser.name}
                className="w-full h-full "
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{currentUser.name}</h2>
            <p className="text-gray-500">{currentUser.role}</p>
            <div className="mt-6 space-y-2 text-left">
              <p className="font-semibold">Profile</p>
              <ul className="text-gray-600 space-y-1">
                <li>Tasks</li>
                <li>Calendar</li>
                <li>Files</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl shadow bg-white p-6">
            <h3 className="text-lg font-semibold mb-4">
              {currentUser.name} spends most of their time on...
            </h3>
            <ul className="space-y-2">
              {[
                "Product Infrastructure",
                "Network Security",
                "Security Testing",
                "Security Audit Outsourcing",
                "Bugs",
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded-md flex items-center"
                >
                  <span className="mr-2">🔹</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl shadow bg-white p-6">
            <h3 className="text-lg font-semibold mb-4">Works most with...</h3>
            <div className="flex gap-4 flex-wrap">
              {[
                "Joe A.",
                "Dylan C.",
                "Ethan C.",
                "Louis W.",
                "Jacob S.",
                "Julia M.",
              ].map((name, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto text-lg font-medium">
                    {name[0]}
                  </div>
                  <p className="text-sm mt-2">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>)}
      {!currentUser && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-500">User not found</p>
        </div>
      )}
    </div>
  );
}
