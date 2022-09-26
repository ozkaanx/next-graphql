export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  image: string;
}

export interface CharactersResponse {
  characters: Character[];
}
