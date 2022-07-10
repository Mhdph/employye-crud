import React from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";

function Table() {
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
        <tr className="bg-grat-50 text-center">
          <td className="px-16 py-2 flex flex-row items-center">
            <img src="#" />
            <span className="text-center ml-2 font-semibold">Mahdi</span>
          </td>
          <td className="px-16 py-2">
            <span>Mahdi@gmail.com</span>
          </td>
          <td className="px-16 py-2">
            <span>$500</span>
          </td>
          <td className="px-16 py-2">
            <span>10-05-22</span>
          </td>
          <td className="px-16 py-2">
            <button className="cursor-pointer">
              <span className="bg-green-500 text-white py-1 px-5 rounded-full">
                Active
              </span>
            </button>
          </td>
          <td className="px-16 py-2">
            <button className="cursor-pointer flex justify-around gap-5">
              <PencilIcon className="h-5 w-5  text-green-600 " />
              <TrashIcon className="h-5 w-5 text-red-700 " />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
