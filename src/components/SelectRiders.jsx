import React from "react";

function SelectRiders({ data, register }) {
  return (
    <select
      name="user"
      className="form-control form-control-default"
      defaultValue=""
      ref={register}
    >
      {data.map((rider, index) => {
        return (
          <option value={rider._id} key={index}>
            {rider.name} {rider.lastname}
          </option>
        );
      })}
    </select>
  );
}

export default SelectRiders;
