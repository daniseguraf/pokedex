// TYPES
export type PokemonId = { id: number };

export type PokemonName = { name: string };

export type PokemonSprites = { front_default: string };

export type PokemonType = {
  type: {
    name: string;
    url: string;
  };
};

export type PokemonItemType = {
  id: PokemonId;
  name: PokemonName;
  sprites: PokemonSprites;
  types: PokemonType[];
};
