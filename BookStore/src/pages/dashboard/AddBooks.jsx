import React, { useState } from "react";

const AddBooks = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    stock: 0,
    category: "",
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      coverImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    // Example: Submit to API endpoint
    fetch("/api/books", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Book added successfully!");
        setFormData({
          title: "",
          author: "",
          description: "",
          price: "",
          stock: 0,
          category: "",
          coverImage: null,
        });
      })
      .catch((error) => {
        alert("Error adding book.");
        console.error(error);
      });
  };

  return (
    <div className="flex w-full justify-center">
    <div className="bg-slate-700 p-6 rounded-md w-8/12">
      <h2 className="text-white text-xl mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300"
          required
        ></textarea>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300"
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 rounded border border-gray-300"
          required
        />
        <div className="flex flex-col items-center">
          <input
            type="file"
            name="coverImage"
            onChange={handleFileChange}
            className="p-2 rounded border border-gray-300 w-full"
            required
          />
          <h2>OR</h2>

          <input
            type="text"
            name="coverImageurl"
            //   onChange={}
            placeholder="Image Url"
            className="p-2 rounded border border-gray-300 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddBooks;
