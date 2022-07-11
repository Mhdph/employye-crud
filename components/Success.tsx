import React from "react";

interface SuccessProps {
  message: string;
}

function Success({ message }: SuccessProps) {
  return (
    <div className="container mx-auto">
      <div className="flx justify-center mx-auto border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-sm my-4 py-2 text-center bg-opacity-5 ">
        {message}
      </div>
    </div>
  );
}

export default Success;
