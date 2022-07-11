import React, { useReducer } from "react";
import Success from "./Success";
import { PlusIcon } from "@heroicons/react/solid";
import Bug from "./Bug";

const reducer = (state: any, event: { target: { name: any; value: any } }) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function AddUserForm() {
  const [formdata, setFormData] = useReducer(reducer, {});

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (Object.keys(formdata).length === 0) {
      return <Bug message="You Must Complate all Field" />;
    }
    console.log(formdata);
  };

  if (Object.keys(formdata).length > 0) {
    return <Success message={"Data Added"} />;
  }

  return (
    <form
      className="grid lg:grid-cols-2 w-4/6 gap-4 py-5"
      onSubmit={handleSubmit}
    >
      <div className="">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="firstname"
          placeholder="First Name"
          onChange={setFormData}
        />
      </div>
      <div className="">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="email"
          placeholder="Email"
          onChange={setFormData}
        />
      </div>
      <div className="">
        <input
          type="text"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          name="slary"
          placeholder="Salary"
          onChange={setFormData}
        />
      </div>
      <div className="">
        <input
          type="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
          name="date"
          placeholder="Date"
          onChange={setFormData}
        />
      </div>
      <div className="flex gap-10 items-center">
        <div>
          <input
            type="radio"
            id="radioDefault"
            value="Active"
            className="form-radio"
            name="status"
            onChange={setFormData}
          />
          <label htmlFor="radioDefault" className="inline-block text-gray">
            Active
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radioDefault2"
            value="Inactive"
            className="form-radio"
            name="status"
            onChange={setFormData}
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray">
            Inactive
          </label>
        </div>
      </div>
      <button className="flex justify-center text-base w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add <PlusIcon className="h-4 ml-1 w-4 mt-1" />
      </button>
    </form>
  );
}

export default AddUserForm;
