import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      password: "",
      address: "",
      country: "",
      state: "",
      city: "",
      postalCode: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.mobile) {
        errors.mobile = "Mobile number is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.address) {
        errors.address = "Address is required";
      }
      if (!values.country) {
        errors.country = "Country is required";
      }
      if (!values.state) {
        errors.state = "State is required";
      }
      if (!values.city) {
        errors.city = "City is required";
      }
      if (!values.postalCode) {
        errors.postalCode = "Postal Code is required";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      // console.log("Form Data Submitted:", values);

      try {
        const response = await fetch(
          "http://localhost:3001/api/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();

        if (response.ok) {
          navigate("/login");
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          resetForm(); // Reset form fields after successful submission
          return;
        }

        if (response.status === 400 || response.status === 500) {
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          return;
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An unexpected error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-800">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">
          Register
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.mobile && formik.touched.mobile ? (
            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.address && formik.touched.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.country && formik.touched.country ? (
            <div className="text-red-500 text-sm">{formik.errors.country}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="state"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.state && formik.touched.state ? (
            <div className="text-red-500 text-sm">{formik.errors.state}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.city && formik.touched.city ? (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-300 dark:focus:ring-blue-600 focus:outline-none"
          />
          {formik.errors.postalCode && formik.touched.postalCode ? (
            <div className="text-red-500 text-sm">
              {formik.errors.postalCode}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 dark:bg-blue-600 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 focus:ring focus:ring-blue-300 dark:focus:ring-blue-800 focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
