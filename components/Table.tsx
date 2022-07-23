import React from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";
import { getUsers } from "../lib/helper";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { toggleChangeAction } from "../app/reducer";

function Table() {
  const { isLoading, isError, data, error } = useQuery(["users"], getUsers);

  if (isLoading) return "Loading...";

  if (error instanceof Error) {
    error.message;
  }

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="text-gray-200 px-16 py-2">Name</th>
          <th className="text-gray-200 px-16 py-2">Email</th>
          <th className="text-gray-200 px-16 py-2">Salary</th>
          <th className="text-gray-200 px-16 py-2">Birthday</th>
          <th className="text-gray-200 px-16 py-2">Status</th>
          <th className="text-gray-200 px-16 py-2">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {data.map((item: Props) => (
          <Tr
            key={item.id}
            id={item.id}
            name={item.name}
            avatar={item.avatar}
            email={item.email}
            salary={item.salary}
            date={item.date}
            status={item.status}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

interface Props {
  id: number;
  name: string;
  avatar: string;
  email: string;
  salary: string;
  date: string;
  status: string;
}

function Tr({ id, name, avatar, email, salary, date, status }: Props) {
  const visible = useSelector((state: any) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction());
  };

  return (
    <tr className="bg-grat-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={avatar || "#"}
        />
        <span className="text-center ml-2 font-semibold">{name}</span>
      </td>
      <td className="px-16 py-2">
        <span>{email}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date}</span>
      </td>
      <td className="px-16 py-2">
        <button className="cursor-pointer">
          <span
            className={` ${
              status === "Active" ? "bg-green-500" : "bg-rose-500"
            }  text-white py-1 px-5 rounded-full`}
          >
            {status}
          </span>
        </button>
      </td>
      <td className="px-16 py-2">
        <button className="cursor-pointer flex justify-around gap-5">
          <PencilIcon onClick={onUpdate} className="h-5 w-5  text-green-600 " />
          <TrashIcon className="h-5 w-5 text-red-700 " />
        </button>
      </td>
    </tr>
  );
}
