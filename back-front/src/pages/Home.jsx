import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    // getAllInformation();
    async function getAllInformation() {
      const res = await fetch("http://localhost:3000/meryem/");
      const data = await res.json();
      setInformation(data);
    }
    getAllInformation();
  }, []);

  console.log(information);

  return (
    <>
      {information.map((x) => {
        <div key={x._id}>
          <h1>{x.title}</h1>
          <p>{x.author}</p>
          <p>dksjdksj</p>
        </div>;
      })}
    </>
  );
}

export default Home;
