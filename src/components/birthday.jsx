import { useState } from "react";
import data from "./data";
import List from "./list";
function Birthday() {
  const [people, setPeople] = useState(data);
  return (
    <main className="bg-yellow-600 h-screen flex justify-center ">
      <section className="bg-white m-20 rounded-lg shadow-xl shadow-black">
        <h3 className="text-2xl text-center my-10 capitalize font-bold">
          {people.length} birthdays today
        </h3>
        <List people1={people} />
        <button
          className="text-white bg-indigo-500 w-96 p-2 mx-10 my-16 text-lg rounded cursor-grabbing tracking-widest hover:bg-slate-800 shadow-md shadow-slate-800"
          onClick={() => setPeople([])}
        >
          Snap All!
        </button>
      </section>
    </main>
  );
}

export default Birthday;
