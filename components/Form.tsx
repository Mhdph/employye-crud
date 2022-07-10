import React from "react";

function Form() {
  return (
    <form>
      <div className="">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="firstname"
          placeholder="First Name"
        />
      </div>
      <div className="">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="slary"
          placeholder="Salary"
        />
      </div>
      <div>
        <div>
          <input
            type="radio"
            value="Active"
            className="form-radio"
            name="status"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
