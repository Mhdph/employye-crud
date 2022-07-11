import type { NextPage } from "next";
import Head from "next/head";
import { UserAddIcon } from "@heroicons/react/solid";
import Table from "../components/Table";
import Form from "../components/Form";
import { useState } from "react";

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(!visible);
  };

  return (
    <section>
      <Head>
        <title>Crud</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="flex items-center bg-indigo-500 text-white px-4 py-2 border rounded-md hover::bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee
              <UserAddIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="container mx-auto">
          {visible ? <Form /> : <></>}
          <Table />
        </div>
      </main>
    </section>
  );
};

export default Home;
