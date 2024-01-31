import { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";


const HomePage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

 
  // fetching the api data using axios
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // this function will search for the input value
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // here newData is created whill have the data of searched character
  const newData = data.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10">
        {/* logo */}
        <Link to={"/"}>
          <img
            src="https://raw.githubusercontent.com/abhinav0306/kalvium-books/main/kalvium-books/src/assets/logo.png"
            alt=""
            className="w-40 h-12 mb-4 md:mb-0"
          />
        </Link>
        {/* search box, component taken from MUI */}
        <TextField
          id="outlined-basic"
          label="Search Book here"
          variant="outlined"
          className="p-2 h-fit shadow-2xl w-full md:w-1/2"
          onChange={handleChange}
        />
        <Link to={"/registration"}>
          <div className="border-2 border-red-600 rounded-lg px-3 py-2 mt-4 md:mt-0 md:ml-4 flex items-center justify-center text-red-400 cursor-pointer">
            Register
          </div>
        </Link>
      </div>
      <h1 className="text-center text-2xl font-bold">AVAILABLE BOOKS</h1>
      <div className="container mx-auto p-4 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {newData.map((book) => (
            <div key={book.id} className="flex flex-col items-center">
              <img
                src={book.imageLinks.thumbnail}
                alt=""
                className="w-44 h-64 mb-4"
              />
              <h2 className="text-xl font-bold mt-2">{book.title}</h2>
              <h3 className="text-lg font-medium mt-2">
                {book.authors.join(", ")}
              </h3>
              <div className="flex gap-2 mt-2">
                <p className="text-gray-700">
                  {book.averageRating ? `${book.averageRating} ★` : "NA"}
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
