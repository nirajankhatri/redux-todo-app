import React from "react";
import "../../style/components/_logCardContainer.scss";

const LogCardContainer = ({ logData }) => {
  return (
    <div className="logCardContainer">
      {logData.map((activity) => (
        <div className="logCard" key={activity.activityId}>
          <div className="logCardInfo">
            <h4 className={`logCard__activityID`}>
              <span>Activity ID</span>
              <span>{activity.activityId}</span>
            </h4>
          </div>
          <div className="logCardInfo">
            <h4 className={`logCard__todoId`}>
              <span>Todo ID</span>
              <span>{activity.todoId}</span>
            </h4>
          </div>
          <div className="logCardInfo">
            <h4 className={`logCard__title`}>
              <span>Todo Title</span>
              <span>{activity.title}</span>
            </h4>
          </div>
          <div className="logCardInfo">
            <h4 className={`logCard__activity`}>
              <span>Activity </span>
              <span>{activity.activity}</span>
            </h4>
          </div>
          <div className="logCardInfo">
            <h4 className={`logCard__dateTime`}>
              <span>DateTime </span>
              <span>{activity.dateTime}</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogCardContainer;
