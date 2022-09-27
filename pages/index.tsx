import { GetServerSideProps } from "next";
import React from "react";
import Section from "../components/share/Section";
import { Character, CharactersResponse } from "../types";
import { getCharacters } from "../utils/requests";

export default function Home({ data } ) {
  return (
    <div className="grid grid-cols-4 gap-10 p-7 max-w-7xl m-auto">
      <div className="grid-menu">Menu</div>
      <div className="grid-section col-span-3 flex flex-col gap-10">
        <Section response={data.results} />
      </div>
    </div>
  );

}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getCharacters();
  return {
    props: { data },
  }
}



