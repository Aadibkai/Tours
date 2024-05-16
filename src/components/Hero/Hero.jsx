import React from "react";
import { data } from "../../assets/data.js";
import { useState } from "react";
const Hero = () => {
  const [search, setSearch] = useState("");
  const [priceValue, setPriceValue] = React.useState(30);
  const [filterValue, setSearchValue] = useState([]);

  const handleSearch = (value) => {
    console.log("c", value);
    setSearch(value);
    const filterProduct = data.filter((product) => {
      if (search === " ") {
        return product;
      } else if (product.city.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
    });

    setSearchValue(filterProduct);
  };

  const handleSetselected = (item) => {
    setSearch(item);
    setSearchValue("");
  };
  console.log(8776, filterValue);

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4 overflow-hidden">
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative "
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div className="relative">
                <label htmlFor="destination" className="opacity-70">
                  Searh your Destination
                </label>
                <input
                  onChange={(e) => handleSearch(e.target.value)}
                  type="text"
                  name="destination"
                  placeholder="Pune"
                  value={search}
                  id="destination"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />

                <div className="absolute bg-white w-full max-h-[40vh] overflow-y-auto">
                  {filterValue &&
                    filterValue.map((item) => {
                      return (
                        <div style={{ maxHeight: "24px" }}>
                          <h6 onClick={() => handleSetselected(item.city)}>
                            {item.city}
                          </h6>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div>
                <label htmlFor="destination" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
