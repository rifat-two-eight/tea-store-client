import { Link } from "react-router";
import Swal from "sweetalert2";

const Teas = ({ tea }) => {
  const { _id, name, quantity, price, photo } = tea;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/teas/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm border-amber-400 border-2">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl w-96 h-72" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
          <div className="card-actions">
            <Link to={`teas/${_id}`}>
              <button className="px-3 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-lg">
                View
              </button>
            </Link>
            <button className="px-3 py-2 bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold rounded-lg">
              Update
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="px-3 py-2 bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teas;
