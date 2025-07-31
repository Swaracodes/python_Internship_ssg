// src/components/TeamList.jsx
import React from "react";
import teamData from "../constants/teamData";

const TeamList = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1><b><u>Our Team Members</u></b></h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {teamData.map((member) => (
          <div
            key={member.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              width: "200px",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={member.profileImage}
              alt={member.name}
              style={{ width: "100%", borderRadius: "20px" }}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
