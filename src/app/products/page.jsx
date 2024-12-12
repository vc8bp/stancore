"use client"
import Image from "next/image";
import React, { useState } from "react";

const products = [
  {
    name: "Flats",
    sizes: "12x3mm - 300x25mm",
    grade: "Mild Steel",
    image: "steel-flat-500x500.webp"
  },
  {
    name: "Plates",
    thickness: "5mm to 200mm",
    width: "1250mm to 3000mm",
    length: "1mtr. to 12.5mtr.",
    grades: "All grades available as per customer's requirement",
    image: "wall-form-shuttering-plate-500x500.webp"
  },
  {
    name: "Angle",
    sizes: "25x25x3mm - 150x150x20mm",
    grade: "Mild Steel",
    image: "shopping.webp"
  },
  {
    name: "Channel",
    sizes: "75x40mm - 400x200mm",
    grade: "Mild Steel",
    image: "channel 3.jpg",
  },
  {
    name: "Beam",
    sizes: "100x50mm - 600x200mm",
    grade: "Mild Steel",
    image: "Mild-Steel-I-Beam-1.jpg"
  },
  {
    name: "Round Bar",
    use: "Used for re-rolling into long products, such as deformed bars, angles and profiles.",
    size: "65mm - 150mm",
    grade: "All grades of Carbon and Alloy Mild Steel",
    image: "Round Bar.jpg"
  },
  {
    name: "Square Bar",
    sizes: "10mm - 50mm",
    grade: "Mild Steel",
    image: "Square Bar.webp"
  },
  {
    name: "Mild Hot HR Coil",
    thickness: "1.5mm to 25mm",
    width: "900mm to 2000mm",
    length: "As per customer's requirement",
    grades: "All grades available as per customer's requirement",
    image: "hr coil.jpg"
  },
  {
    name: "BQ Plate",
    thickness: "6mm to 150mm",
    width: "1250mm to 2500mm",
    length: "5mtr. to 12mtr.",
    grade: "SA 516 Gr. 60, SA 516 Gr. 70, ASTM A 516 Gr. 60, ASTM A 516 Gr. 70, ASTM A 515 Gr. 70, IS 2002 Gr. 1 and IS 2002 Gr. 2",
    image: "BQ Plate.jpg"
  },
  {
    name: "TMT Bar",
    size: "8mm - 40mm",
    grade: "IS 1786 Fe 500 D, JSW TMT Plus Fe 500, JSW TMT Plus Fe 500 D",
    image: "TMT Bar.avif"
  },
  {
    name: "Chequered Coils/Plates",
    thickness: "3mm - 12mm",
    width: "900mm - 1500mm",
    length: "As per customer's requirement",
    grade: "IS: 3502 Fe410",
    image: "chequered 1.jpg"
  },
  {
    name: "C-45 Plates",
    thickness: "16mm to 180mm",
    width: "1250mm to 2000mm",
    length: "1mtr. to 10mtr",
    image: "C-45 Plates.jpg"
  },
];

const getFilterOptions = (products, attribute) => {
  const options = new Set();
  products.forEach((product) => {
    if (product[attribute]) {
      options.add(product[attribute]);
    }
  });
  return Array.from(options);
};

const ProductPage = () => {
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (attribute, value) => {
    setFilters({ ...filters, [attribute]: value });
  };

  const filteredProducts = products.filter((product) => {
    const matchesFilters = Object.keys(filters).every((key) => {
      return !filters[key] || product[key] === filters[key];
    });

    const matchesSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesFilters && matchesSearch;
  });

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Search for a product</h1>
        <p className="text-gray-600 mb-4">
          We have amazing products in our portfolio, check them now!
        </p>
        <div className="flex items-center bg-white shadow rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex">
        {/* Filters */}
        <div className="w-1/4 bg-white shadow p-4 rounded-md">
          <h2 className="font-semibold text-lg mb-4">Filters</h2>
          {['sizes', 'grade', 'thickness', 'width', 'length'].map((attribute) => (
            <div className="mb-4" key={attribute}>
              <h3 className="font-medium mb-2 capitalize">{attribute}</h3>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
                onChange={(e) => handleFilterChange(attribute, e.target.value)}
              >
                <option value="">All</option>
                {getFilterOptions(products, attribute).map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Products List */}
        <div className="w-3/4 ml-8">
          <div className="grid grid-cols-1 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow rounded-md p-4"
              >
                <Image
                  src={product.image ? `/products/${product.image}` : "https://via.placeholder.com/150"}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="w-40 h-40 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-medium">{product.name}</h3>
                  <ul className="text-gray-500">
                    {Object.keys(product).map(
                      (key) =>
                        key !== "name" && (
                          <li key={key} className="whitespace-pre-wrap">
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {product[key]}
                          </li>
                        )
                    )}
                  </ul>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    <span className="sr-only">View</span>
                    👁️
                  </button>
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    <span className="sr-only">Compare</span>
                    =
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Compare Button */}
          <div className="mt-6">
            <button className="px-4 py-2 bg-red-600 text-white rounded-md">
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
