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

  // here newData is created which will have the data of the searched character
  const newData = data.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8 border-b-2 border-black pb-8">
          {/* logo */}
          <Link to={"/"}>
            <img
              src="https://raw.githubusercontent.com/abhinav0306/kalvium-books/main/kalvium-books/src/assets/logo.png"
              alt="Logo"
              className="w-36"
            />
          </Link>
          {/* search box, component taken from MUI */}
          <TextField
            id="outlined-basic"
            label="Search Book here"
            variant="outlined"
            className="p-2 w-full md:w-1/3"
            onChange={handleChange}
          />
          <Link to={"/registration"}>
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-700 transition duration-300">
              Register
            </div>
          </Link>
        </div>
        <h1 className="text-left text-3xl font-bold mb-8">AVAILABLE BOOKS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {newData.map((book) => (
            <div key={book.id} className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
              <img
                src={book.imageLinks.thumbnail}
                alt={book.title}
                className="w-48 h-64 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold text-left">{book.title}</h2>
              <h3 className="text-md text-gray-600 text-left">{book.authors.join(", ")}</h3>
              <div className="flex items-center justify-start mt-2">
                <p className="text-lg text-gray-700">
                  {book.averageRating ? `${book.averageRating} ★` : "NA"}
                </p>
                <p className="text-lg text-red-600 ml-2">Free</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
