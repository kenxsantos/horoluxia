import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import productData from "../product.json";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const SearchItem = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchInput;
    const result = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (result.length === 0) {
      setFilteredProducts([]);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="max-w-4xl mx-auto mt-2">
      <div className="shadow-md rounded-full border-t">
        <form
          className="flex flex-col md:flex-row items-center justify-center md:items-center flex-wrap"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 md:mb-0 md:mr-4  ">
            <Categories />
          </div>
          <div className="flex items-center flex-1">
            <input
              type="search"
              placeholder="Search"
              className="w-full border-r-0 border-slate-500 px-3 h-14 focus:outline-none border-0"
              value={searchInput}
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="rounded-r-full font-medium border-l-0 px-4 h-14"
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
      {filteredProducts.length === 0 ? (
        <div  className="font-semibold mt-4 font-sans flex justify-center text-xl">No matching products found.</div>
      ) : (
        <ul className="flex flex-row flex-wrap w-full gap-2 justify-center">
          {searchInput &&
            filteredProducts.map((product, i) => (
              <li key={i} className="mt-8">
                <Link
                  to={`/shop/${product.id}`}
                  className="border-2 w-full p-4"
                >
                  {product.name}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchItem;
