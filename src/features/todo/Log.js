import { faBorderAll, faTableList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../../style/components/_log.scss";
import LogCardContainer from "./LogCardContainer";
import LogTable from "./LogTable";

const Log = () => {
  const [log, setLog] = useState([]);
  const [isTable, setIsTable] = useState(
    JSON.parse(localStorage.getItem("logView")) != null
      ? JSON.parse(localStorage.getItem("logView"))
      : true
  );

  let logArray = localStorage.getItem("todoLog");

  const changeViewHandler = () => {
    localStorage.setItem("logView", JSON.stringify(!isTable));
    setIsTable((prevState) => !prevState);
  };

  useEffect(() => {
    if (logArray?.length > 0) {
      setLog(JSON.parse(logArray));
    }
  }, [logArray]);

  const logClearHandler = () => {
    const doClear = window.confirm("Are you sure you want to clear the log ? ");
    if (doClear) {
      localStorage.removeItem("todoLog");
      setLog([]);
    }
  };

  return (
    <div>
      <div className="btns">
        <button className="btn btn-clearLog" onClick={logClearHandler}>
          Clear Log
        </button>
        {isTable == true ? (
          <FontAwesomeIcon
            icon={faBorderAll}
            size="2xl"
            onClick={changeViewHandler}
          />
        ) : (
          <FontAwesomeIcon
            icon={faTableList}
            size="2xl"
            onClick={changeViewHandler}
          />
        )}
      </div>

      {isTable == true ? (
        <LogTable logData={log} />
      ) : (
        <LogCardContainer logData={log} />
      )}
    </div>
  );
};

export default Log;
