import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Salary = ({ handleClick, handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2"> Salary</h4>
      <div className="flex flex-row mb-4 ">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test2"
            id="test2"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"> </span> All
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30k"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={80}
          title="< 50k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
