import React, { useRef, useState, useEffect } from "react";
import MerchCard from "./merchCards";
import data from "./merch.json";
import axios from "axios";

const Merch = () => {
  // Create a reference to the scrollable div
  const scrollRef = useRef(null);

  // Function to scroll the container left or right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500; // You can adjust this value for how much to scroll per click
      scrollRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  // Woo product fetch
  const [merchProducts, setMerchProducts] = useState([]);

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const consumerKey = process.env.REACT_APP_CONSUMER_KEY;
  const consumerSecret = process.env.REACT_APP_CONSUMER_SECRET;

  // Fetch products by category

  const fetchProductsByCategory = async (categoryId, setProducts) => {
    try {
      const response = await axios.get(`${baseURL}/products`, {
        params: {
          consumer_key: consumerKey,
          consumer_secret: consumerSecret,
          category: categoryId, // Replace with the category ID (e.g., 12)
          per_page: 20, // Adjust as needed
        },
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setProducts(response.data);
      console.log(response.data); // Should return products in the given category
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  useEffect(() => {
    fetchProductsByCategory(19, setMerchProducts); // Replace "merch" with your merch category slug
  }, []);

  if (!merchProducts || merchProducts.length === 0) {
    return <p>No retreats available.</p>;
  }

  return (
    <>
      <div className="d-lg-flex d-none align-items-center justify-content-end gap-2 mb-2">
        <button className="btn bg-secondary txtSecondary d-flex align-items-center justify-content-center" style={{ height: "50px", width: "50px", borderRadius: "100%" }} onClick={() => scroll(-1)}>
          <img src="./assets/chevron-left-solid.svg" height={20} />
        </button>

        <button className="btn bg-secondary txtSecondary d-flex align-items-center justify-content-center" style={{ height: "50px", width: "50px", borderRadius: "100%" }} onClick={() => scroll(1)}>
          <img src="./assets/chevron-right-solid.svg" height={20} />
        </button>
      </div>

      <div className="w-100 h-scroll slim-scroll" ref={scrollRef} style={{ scrollBehavior: "smooth" }}>
        {merchProducts.map((ini) => {
          return (
            <div className="h-element" key={ini.id}>
              <MerchCard item={ini} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Merch;
