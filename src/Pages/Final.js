import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Matter from "../components/Matter";
import Customer from "../components/Customers";
import Recent from "../components/Recently";
import Like from "../components/Like";
import Others from "../components/Others";
import Trust from "../components/Trust";
import ReadMore from "../components/Read";
import Worldwide from "../components/Worldwide";
import HelpPanel from "../components/Help";
import CarouselWithMainPic from "../components/CarouselMainPic";
import Bottom from "../components/Bottom";
import Footer from "../components/Finish";

function Final() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleComboSelect = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    fetch(`https://fnp-backend.onrender.com/products/${id}`)``
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("Error fetching product:", err));
  }, [id]);

  if (!product)
    return <div className="text-center mt-20 text-xl">Loading product...</div>;

  return (
    <div className="Final">
      <Navbar />
      <Dropdown />
      <h3 className="text-left pl-36 mt-3 font-normal text-gray-500 lg-xl:pl-3 md-lg:pl-2">
        Home / Flowers / Send Flower Online
      </h3>

      {/* Main section */}
      <div className="flex flex-col md:flex-row md:items-start md:space-x-6 md:px-12 lg:px-20">
        {/* Sticky Section (Carousel) */}
        <div className="md:w-1/2 w-full md:sticky md:top-24 md:self-start">
          <CarouselWithMainPic selectedImage={selectedImage} />
        </div>

        {/* Scroll Section (Matter) */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <Matter product={product} onComboSelect={handleComboSelect} />
        </div>
      </div>

      <Customer />
      <Recent />
      <Like />
      <Others />
      <Trust />
      <ReadMore />
      <Worldwide />
      <HelpPanel />
      <Bottom />
      <Footer />
    </div>
  );
}

export default Final;
