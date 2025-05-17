import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...rest } = Object.fromEntries(formData.entries());

    createUser(email, password)
      .then((res) => {
        const userProfile = {
          email,
          ...rest,
          creationTime: res.user?.metadata?.creationTime,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto my-10 p-4 sm:p-6 bg-white shadow-md rounded-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Your Account
        </h2>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Rifat Vaya"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="name"
            placeholder="Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone No
          </label>
          <input
            type="text"
            name="phone"
            id="name"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Photo URL
          </label>
          <input
            type="url"
            name="photo"
            id="photo"
            placeholder="https://your-photo-link.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="hau@mau.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md cursor-pointer transition duration-200"
        />

        <button
          type="button"
          className="w-full cursor-pointer flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Sign Up with Google
        </button>
        <p className="text-md text-gray-600">
          Already have an account?
          <Link className="text-blue-500 font-semibold" to="/login">
            {" "}
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
