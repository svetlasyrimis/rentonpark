import React from "react";

function SelectSession({ data, main_session }) {
  return (
    <select
      name="select"
      className="form-control form-control-default"
      defaultValue={main_session}
    >
      {data.map((session, index) => {
        return (
          <option value={session._id} key={index}>
            {session.name}
          </option>
        );
      })}
    </select>
  );
}

export default SelectSession;
