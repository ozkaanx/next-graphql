import React from "react";
import Section from "../components/share/Section";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-10 p-7">
      <div className="bg-slate-200">Menu</div>
      <div className="col-span-3 bg-slate-200">
        <Section gridNumber={4} />
      </div>
    </div>
  );
}
