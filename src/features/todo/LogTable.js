import React from "react";

const LogTable = ({ logData }) => {
  return (
    <div>
      <div className="activity-grid">
        <div className="activity-col activity-col-th">Activity ID</div>
        <div className="activity-col activity-col-th">Todo ID</div>
        <div className="activity-col activity-col-th">Todo Title</div>
        <div className="activity-col activity-col-th">Activity</div>
        <div className="activity-col activity-col-th">DateTime</div>
        {logData?.map((item) => (
          <React.Fragment key={item.activityId || ""}>
            <div className="activity-col">{item?.activityId || ""}</div>
            <div className="activity-col">{item?.todoId || ""}</div>
            <div className="activity-col">{item?.title || ""}</div>
            <div className="activity-col">{item?.activity || ""}</div>
            <div className="activity-col">{item?.dateTime || ""}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LogTable;
