import { config } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import "../../style/components/_log.scss";

const Log = () => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    const logArray = localStorage.getItem("todoLog");
    if (logArray?.length > 0) {
      setLog(JSON.parse(logArray));
    }
  }, []);

  return (
    <table className="activity-table">
      <thead>
        <tr>
          <th>Activity ID</th>
          <th>TODO ID</th>
          <th>Activity</th>
          <th>Date/Time</th>
        </tr>
      </thead>
      <tbody>
        {log?.map((item, index) => (
          <tr key={index}>
            <td>{item?.activityId}</td>
            <td>{item?.todoId}</td>
            <td>{item?.activity}</td>
            <td>{item?.dateTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Log;
