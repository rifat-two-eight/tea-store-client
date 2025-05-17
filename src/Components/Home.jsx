import { useLoaderData } from "react-router";
import Teas from "./Teas";
import { useState } from "react";

const Home = () => {
  const initialTeas = useLoaderData();
  const [teas, setTeas] = useState(initialTeas);
  return (
    <>
      <h2 className="font-semibold text-3xl text-center my-10">All Tea</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
        {teas.map((tea) => (
          <Teas teas={teas} setTeas={setTeas} key={tea._id} tea={tea}></Teas>
        ))}
      </div>
    </>
  );
};

export default Home;
