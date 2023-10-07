/* eslint-disable react/prop-types */

const Member = ({ member }) => {
  const { name, image, title, description } = member;
  return (
    <div className="rounded-lg grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-4 shadow-lg p-4 border mb-4 card space-y-3 bg-base-200 ">
      <figure className="max-w-[400px] h-[225px]">
        <img src={image} alt="img" className=" rounded-lg w-full h-full" />
      </figure>
      <div className="space-y-2">
        <h2 className="card-title">{name}</h2>
        <h2 className="text-start text-[#ff9318cc] font-semibold text-xl">{title}</h2>
        <p className="text-start text-[#706F6F]">
            {description}
        </p>
      </div>
    </div>
  );
};

export default Member;
