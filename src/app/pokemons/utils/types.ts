export type Pokemon = {
  id: number;
  name: string;
  sprites?: string;
  image?: string;
  number?: number;
  url?: string;
};

export type PokemonDetails = {
  id: number;
  order: number;
  name: string;
  height: number;
  abilities: string[];
  spices: Species;
  types: Type[];
  weight: number;
  sprites: Sprite;
  stats: Stat[];
};

export type Species = {
  url: string;
};

export type Type = {
  slot: number;
  type: {
    name: string;
  };
};

export type Sprite = {
  other: {
    dream_world: {
      front_default: string;
    };
  };
};

export type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonProfile = {
  id?: number | string;
  name?: string;
  types?: Types[];
  stats?: Stats[];
  sprites?: Sprite;
};

export type Types = {
  type: {
    name: string;
  };
};

export type Stats = {
  base_stat: string | number;
};
