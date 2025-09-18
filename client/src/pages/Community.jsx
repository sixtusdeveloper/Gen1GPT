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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-5">
            {images.map((item, index) => (
              <a
                key={index}
                href={item.imageUrl}
                target="_blank"
                className="relative group rounded-lg overflow-hidden block border border-gray-200 dark:border-[#4a3a5d]/30 shadow-sm hover:shadow-md transition-shadow duration-300 "
              >
                <img
                  src={item.imageUrl}
                  alt={`Published ${index}`}
                  className="w-full h-50 md:h-54 2xl:h-60 object-cover group-hover:scale-105 rounded-md transition-transform duration-300 ease-in-out"
                />
                <p className="absolute bottom-0 right-0 text-xs bg-black/50 backdrop-blur text-white px-4 py-1 rounded-tl-xl dark:text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Created by: {item.userName}
                </p>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-purple-300">
          No images available
        </p>
      )}
    </div>
  );
};

export default Community;
