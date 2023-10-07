/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, id, image, price, description } = service;
  return (
    <div className="rounded-lg shadow-lg p-4 border mb-4 card space-y-3 bg-base-200 ">
      <figure className="w-full h-[170px]">
        <img src={image} alt="img" className=" w-full h-full" />
      </figure>
      <div className="space-y-4">
        <h2 className="card-title justify-center">{name}</h2>
        <div className="card-body p-0">
            {description.length > 100 ? (
              <p className="text-[#706F6F]">
                {description.slice(0, 100)} ...Read More
              </p>
            ) : (
              <p>{description}</p>
            )}
        </div>
        
          <div className="flex items-center justify-between relative">
            <Link to={`/service/${id}`}>
              <button className="btn text-[#FFFF] text-lg  bg-[#ff9318cc] hover:bg-[#8f5615]">
                View Details
              </button>
            </Link>
            <p className="text-xl text-right font-semibold text-[#2b2e2b]">
              {price} $
            </p>
          </div>
        </div>
    </div>
  );
};

export default ServiceCard;
