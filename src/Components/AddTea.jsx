import Swal from "sweetalert2";

const AddTea = () => {
  const handleAddTea = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const teaData = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/teas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(teaData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="my-20">
      <div>
        <h2 className="text-3xl text-center">Add Tea Here</h2>
      </div>
      <form onSubmit={handleAddTea}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Tea Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Chef</legend>
            <input
              type="text"
              name="chef"
              className="input w-full"
              placeholder="Chef Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Supplier</legend>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Taste</legend>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste Type"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Quantity</legend>
            <input
              type="text"
              name="quantity"
              className="input w-full"
              placeholder="quantity"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Price</legend>
            <input
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
            type="text"
            name="photo"
            className="input w-full"
            placeholder="photo url"
          />
        </fieldset>
        <input
          className="btn bg-green-600 hover:bg-green-700 text-white w-full mt-5"
          type="submit"
          value="Add Tea"
        />
      </form>
    </div>
  );
};

export default AddTea;
