import React from "react";
import Cards from "./components/cards";

type Props = {
  gridNumber: number;
};

const Section = ({ gridNumber }: Props) => {
  return (
    <div className={`section-grid grid grid-cols-${gridNumber} gap-3`}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default Section;
