import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <div className="max-w-[600px] px-4 m-auto pt-8">
        <div>
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-slate-200 p-4 m-auto flex flex-col items-center rounded-lg mb-4"
            >
              <div className="w-32 h-32 bg-black rounded-full"></div>
              <h2 className="text-base font-semibold">Name: {user.name}</h2>
              <p className="text-base font-semibold">
                Last Name: {user.lastName}
              </p>
              <p className="text-base font-semibold">Age: {user.age}</p>
              <div className="mt-4">
                <button className="bg-slate-300 p-3 rounded-xl">Edit</button>
                <button  className="bg-slate-300 p-3 rounded-xl ml-4">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
