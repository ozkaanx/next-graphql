import Image from "next/image";
import React from "react";

const Cards = ({ response }) => {
  console.log('response', response)
  return (
    <div className="section-grid__card flex flex-col">
      <div className="section-grid__card-image">
        <Image
          src={response.image}
          alt="characters image"
          width={200}
          height={200}
        />
      </div>
      <div className="section-grid__card-content flex flex-col">
        <h2 className="section-grid__card-content-species font-light font-headerFont text-sm text-zinc-500">{response.species}</h2>
        <h2 className="section-grid__card-content-title font-bold font-headerFont text-base">{response.name}</h2>

      </div>
    </div>
  );
};

export default Cards;
