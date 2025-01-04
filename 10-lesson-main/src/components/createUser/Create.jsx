import React, { useState } from "react";

const Create = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    setUsers((prev) => [...prev, { name, lastName, age }]);

    setName("");
    setLastName("");
    setAge("");
  };
  return (
    <>
      <div>
        <div className="max-w-[600px] px-4 m-auto">
          <div className="flex flex-col gap-3 pt-8">
            <input
              className="bg-slate-200 p-3 rounded-xl outline-none"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-slate-200 p-3 rounded-xl outline-none"
              placeholder="Last name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="bg-slate-200 p-3 rounded-xl outline-none"
              placeholder="Age"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button
              className="bg-slate-300 p-3 rounded-xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
