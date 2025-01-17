import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // Handle the publish logic here
    console.log({
      title,
      desc: value,
      category: cat,
      image: file,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-8">
        {/* Title and Editor Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
          />
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>

        {/* Publish Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1 space-y-4">
            <h1 className="text-lg font-semibold">Publish</h1>
            <div className="text-gray-600">
              <p>
                <b>Status: </b> Draft
              </p>
              <p>
                <b>Visibility: </b> Public
              </p>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              htmlFor="file"
              className="block text-center py-2 px-4 bg-gray-700 text-white rounded-md cursor-pointer hover:bg-gray-600 transition"
            >
              Upload Image
            </label>
            <div className="space-x-4">
              <button className="py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300">
                Save as a draft
              </button>
              <button
                onClick={handleClick}
                className="py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600"
              >
                Publish
              </button>
            </div>
          </div>

          {/* Category Section */}
          <div className="flex-1 space-y-4">
            <h1 className="text-lg font-semibold">Category</h1>
            <div className="space-y-2">
              {["art", "science", "technology", "cinema", "design", "food"].map(
                (category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={category}
                      name="category"
                      value={category}
                      checked={cat === category}
                      onChange={(e) => setCat(e.target.value)}
                      className="form-radio text-gray-700"
                    />
                    <label
                      htmlFor={category}
                      className="text-gray-700 capitalize"
                    >
                      {category}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
