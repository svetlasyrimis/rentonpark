import React from "react";

function SelectSession({ data, main_session, register }) {
  return (
    <select
      name="session"
      className="form-control form-control-default"
      defaultValue={main_session}
      ref={register}
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
