import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
const HomePage = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flex h-24 justify-around align-center mt-10  ">
        <img
          src="https://raw.githubusercontent.com/abhinav0306/kalvium-books/main/kalvium-books/src/assets/logo.png"
          alt=""
          className="w-40 h-12"
        />
        {/* <input
          type="text"
          placeholder="Enter book name here"
          className=" p-2  border-5 h-fit  border-solid rounded shadow-2xl  w-1/2"
        /> */}
        <TextField id="outlined-basic" label="Search Book here" variant="outlined" className="p-2 h-fit rounded shadow-2xl  w-1/2" />

        <div className="border-2  border-red-600 rounded-lg px-3 py-2 h-fit flex align-center justify-center text-red-400 cursor-pointer ">
          Register
        </div>
      </div>
      <h1 className="text-center text-2xl">Books Available</h1>
      <div className="container mx-auto p-16 ">
        <div className="grid grid-cols-5  gap-5">
          {data.map((el) => (
            <div key={el.id} className="">
              <img
                src={el.imageLinks.thumbnail}
                alt=""
                className="w-44 h-64 mb-4"
              />
              {console.log(el.averageRating)}
              <h2 className="text-xl font-bold mt-2">{el.title}</h2>
              <h3 className="text-lg font-medium mt-2">
                {el.authors.join(", ")}
              </h3>

              <div className="flex gap-5 ">
                <p className="text-gray-700">
                  {el.averageRating ? `${el.averageRating}★` : "NA"}
                </p>
                <p className="text-red-700">Free</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
