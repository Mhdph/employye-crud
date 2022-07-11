import React from "react";
import AddUserForm from "./AddUserForm";
import UpdateUserForm from "./UpdateUserForm";

function Form() {
  const flag = true;

  return <div>{flag ? <AddUserForm /> : <UpdateUserForm />}</div>;
}

export default Form;
