/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { name, id, image, price, description } = service;
  return (
    <div className="rounded-lg shadow-lg p-4 border mb-4 card space-y-3 bg-base-200 ">
      <figure className="w-full h-full">
        <img src={image} alt="img" className="h-full" />
      </figure>
      <div className="space-y-4">
        <h2 className="card-title justify-center">{name}</h2>
        <div className="card-body p-0">
          {description.length > 100 ? (
            <p className="text-[#706F6F]">
              {description.slice(0, 100)}{" "}
                ...Read More
            </p>
          ) : (
            <p>{description}</p>
          )}
          <Link to={`/service/${id}`}>
                <button className="btn text-[#FFFF] text-lg  bg-[#ff9318cc] hover:bg-[#614e39]">View Details</button>
          </Link> 
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
