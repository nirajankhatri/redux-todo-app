import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "../../style/components/_log.scss";

const Log = () => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    setLog(JSON.parse(localStorage.getItem("todoActivities")));
  }, []);

  return (
    <>
      <Link to="/">
        <button className="goBackBtn">Go Back</button>
      </Link>
      <div className="logPage">
        {log.map((todo) => {
          return (
            <div key={todo.id}>
              <h3>ID: {todo.id}</h3>
              <ul>
                {todo.activity.map((activity) => (
                  <li key={uuid()}>{activity}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Log;
