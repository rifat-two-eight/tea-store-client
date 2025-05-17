import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  const { name, _id, chef, supplier, quantity, taste, price, photo } = data;
  const handleUpdateTea = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTea = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/teas/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTea),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="my-20">
      <div>
        <h2 className="text-3xl text-center">Update Tea Here</h2>
      </div>
      <form onSubmit={handleUpdateTea}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              defaultValue={name}
              type="text"
              name="name"
              className="input w-full"
              placeholder="Tea Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Chef</legend>
            <input
              defaultValue={chef}
              type="text"
              name="chef"
              className="input w-full"
              placeholder="Chef Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Supplier</legend>
            <input
              defaultValue={supplier}
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Taste</legend>
            <input
              defaultValue={taste}
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste Type"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Quantity</legend>
            <input
              defaultValue={quantity}
              type="text"
              name="quantity"
              className="input w-full"
              placeholder="quantity"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Price</legend>
            <input
              defaultValue={price}
              type="text"
              name="price"
              className="input w-full"
              placeholder="price"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo URL</legend>
          <input
            defaultValue={photo}
            type="text"
            name="photo"
            className="input w-full"
            placeholder="photo url"
          />
        </fieldset>
        <input
          className="btn bg-purple-600 hover:bg-purple-700 text-white w-full mt-5"
          type="submit"
          value="Update Tea"
        />
      </form>
    </div>
  );
};

export default Update;
