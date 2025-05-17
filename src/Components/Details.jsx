import { useLoaderData } from "react-router";

const Details = () => {
  const tea = useLoaderData();
  console.log(tea);
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl mt-10">
        Details of {tea.name}
      </h2>
      <img className="w-96 h-96 rounded-xl" src={tea.photo} alt="" />
    </div>
  );
};

export default Details;
