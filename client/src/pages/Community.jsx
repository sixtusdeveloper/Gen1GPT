import React, { useState, useEffect } from "react";
import { dummyPublishedImages } from "../assets/assets";
import Loading from "./Loading";

const Community = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setImages(dummyPublishedImages);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-6 pt-12 xl:px-12 2xl:px-20 w-full h-full mx-auto overflow-y-scroll">
      <h1 className="text-xl font-semibold mb-6 text-center text-gray-800 dark:text-purple-100">
        Community Published Images
      </h1>
      {images.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#2a223a] p-4 rounded-lg shadow-md border border-gray-200 dark:border-[#4a3a5d]/30"
              >
                <img
                  src={img}
                  alt={`Published ${index}`}
                  className="w-full h-auto rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-purple-300">
          No images found
        </p>
      )}
    </div>
  );
};

export default Community;
