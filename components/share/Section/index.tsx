import { HtmlProps } from "next/dist/shared/lib/html-context";
import React from "react";
import { Character, CharactersResponse } from "../../../types";
import Cards from "./components/cards";
import InputSearch from "./components/search";

type Props = {
  response: CharactersResponse;
};

export default function Section({ response }: Props) {
  return (
    <>
      <InputSearch />
      <div className="section-grid grid grid-cols-2 gap-5 p-1 place-content-start lg:grid-cols-4 md:grid-cols-3">
        {Array.isArray(response) &&
          response.map((items) => <Cards response={items} />)}
      </div>
    </>
  );
}
