import graphqlClient from "../../graphql/client";
import GET_CHARACTERS from "../../graphql/queries";
import { CharactersResponse } from "../../types";

export const getCharacters = async () => {
  try {
    const data = await graphqlClient.query<Promise<CharactersResponse>>({
      query: GET_CHARACTERS,
    });
    if (data.errors) {
      throw new Error(data.errors[0].message);
    }
    return (await data?.data)?.characters;
  } catch (error) {
    console.log(error);
    return false;
  }
};
