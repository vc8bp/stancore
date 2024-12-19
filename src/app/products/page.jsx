"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { VscEye } from "react-icons/vsc";
import Link from "next/link";

export const products = [
  {
    name: "Flats",
    sizes: "12x3mm - 300x25mm",
    grade: "Mild Steel",
    image: ["steel-flat-500x500.webp", "Flats.jpg"]
  },
  {
    name: "Plates",
    thickness: "5mm to 200mm",
    width: "1250mm to 3000mm",
    length: "1mtr. to 12.5mtr.",
    grades: "All grades available as per customer's requirement",
    image: ["Plate.jpg"]
  },
  {
    name: "Angle",
    sizes: "25x25x3mm - 150x150x20mm",
    grade: "Mild Steel",
    image: ["shopping.webp", "angel.jpg", "angel3.webp"]
  },
  {
    name: "Channel",
    sizes: "75x40mm - 400x200mm",
    grade: "Mild Steel",
    image: ["channel 3.jpg", "channel 2.jpg", "channel.jpg"],
  },
  {
    name: "Beam",
    sizes: "100x50mm - 600x200mm",
    grade: "Mild Steel",
    image: ["beam.jpg", "beam 2.jpg", "beam 3.jpg"]
  },
  {
    name: "Round Bar",
    use: "Used for re-rolling into long products, such as deformed bars, angles and profiles.",
    size: "65mm - 150mm",
    grade: "All grades of Carbon and Alloy Mild Steel",
    image: ["Round Bar.jpg"]
  },
  {
    name: "Square Bar",
    sizes: "10mm - 50mm",
    grade: "Mild Steel",
    image: ["Square Bar.webp", "Square bar2.jpg"]
  },
  {
    name: "Mild Hot HR Coil",
    thickness: "1.5mm to 25mm",
    width: "900mm to 2000mm",
    length: "As per customer's requirement",
    grades: "All grades available as per customer's requirement",
    image: ["hr coil.jpg"]
  },
  {
    name: "BQ Plate",
    thickness: "6mm to 150mm",
    width: "1250mm to 2500mm",
    length: "5mtr. to 12mtr.",
    grade: "SA 516 Gr. 60, SA 516 Gr. 70, ASTM A 516 Gr. 60, ASTM A 516 Gr. 70, ASTM A 515 Gr. 70, IS 2002 Gr. 1 and IS 2002 Gr. 2",
    image: ["BQ Plate.jpg"]
  },
  {
    name: "TMT Bar",
    size: "8mm - 40mm",
    grade: "IS 1786 Fe 500 D, JSW TMT Plus Fe 500, JSW TMT Plus Fe 500 D",
    image: ["TMT Bar.avif", "TMT Bar 1.jpg"]
  },
  {
    name: "Chequered Coils/Plates",
    thickness: "3mm - 12mm",
    width: "900mm - 1500mm",
    length: "As per customer's requirement",
    grade: "IS: 3502 Fe410",
    image: ["chequered 1.jpg"]
  },
  {
    name: "C-45 Plates",
    thickness: "16mm to 180mm",
    width: "1250mm to 2000mm",
    length: "1mtr. to 10mtr",
    image: ["C-45 Plates.jpg"]
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
  const [selectedProduct, setSelectedProduct] = useState(null);
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
    <div className="p-8 bg-gradient-to-br from-white to-gray-200 min-h-screen">
      {/* Search Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-[var(--db)]">Find the Perfect Product</h1>
        <p className="text-gray-600 mb-4">Explore our portfolio for the best products tailored to your needs.</p>
        <div className="flex items-center justify-center bg-white shadow-md rounded-full overflow-hidden w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filter Section */}
        <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-[var(--db)]">Filters</h2>
          {["sizes", "grade", "thickness", "width", "length"].map((attribute) => (
            <div className="mb-4" key={attribute}>
              <h3 className="font-medium mb-2 capitalize text-gray-700">{attribute}</h3>
              <select
                className="w-full border border-gray-300 rounded-md p-2 text-gray-600"
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

        {/* Product Cards */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              style={{ borderBottom: "7px solid var(--color)" }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedProduct(product)}
            >
              <Image
                src={product.image.length ? `/products/${product.image[0]}` : "https://via.placeholder.com/150"}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[var(--db)]">{product.name}</h3>
                <ul className="text-gray-600 text-sm mt-2 space-y-1">
                  {Object.keys(product).map(
                    (key) =>
                      key !== "name" &&
                      key !== "image" && (
                        <li key={key}>
                          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {product[key]}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="w-full max-w-[90%] overflow-auto rounded-lg shadow-2xl bg-white">
            <DialogHeader>
              <DialogTitle className="text-[var(--db)] text-2xl font-bold">
                {selectedProduct.name}
              </DialogTitle>
            </DialogHeader>
            <div className="flex items-center justify-center flex-wrap gap-4 mt-4">
              {selectedProduct.image.map((i) => (
                <Image
                  key={i}
                  src={`/products/${i}`}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="rounded-md object-cover shadow-md"
                />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Link href={`/contact-us?product=${selectedProduct.name}`} >
                <Button
                  style={{ transition: "all 0.3s ease-in-out" }}
                  // onClick={onClick}
                  className={`px-6 py-3 bg-[var(--color)] text-white font-semibold rounded-md 
                  shadow-lg hover:bg-[var(--db)] transition-transform transform hover:scale-105 
                  hover:text-[var(--seccolor)] `}
                >
                  Make an Inquiry
                </Button>
              </Link>

            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProductPage;
