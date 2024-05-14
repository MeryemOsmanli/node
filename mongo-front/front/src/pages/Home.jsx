import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    getAllInformation();
  }, []);
  async function getAllInformation() {
    const res = await fetch("http://localhost:4000/meryem/");
    const data = await res.json();
    setInformation(data);
  }

  async function handleDelete(id) {
    const res = await fetch("http://localhost:4000/meryem/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    await getAllInformation();
  }
  async function handleEdit(id) {
    const res = await fetch("http://localhost:4000/meryem/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const data = await res.json();
    // await getAllInformation();
  }

  //   console.log(information);

  return (
    <>
      {information.map((x) => {
        return (
          <div
            key={x._id}
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid grey",
            }}
          >
            <h1>{x.title}</h1>
            <p>{x.author}</p>
            <button onClick={() => handleDelete(x._id)}>delete</button>
            <button onClick={() => handleEdit(x._id)}>edit</button>
          </div>
        );
      })}
    </>
  );
}

export default Home;
