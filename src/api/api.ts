import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit: number, offset: number) => {
  const response = await axios.get(`${API_BASE_URL}/pokemon`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data;
};

export const getPokemonDetails = async (pokemonName: string) => {
  const response = await axios.get(`${API_BASE_URL}/pokemon/${pokemonName}`);
  return response.data;
};

export async function getPokemonImage(pokemonName: string): Promise<string> {
  const response = await axios.get(`${API_BASE_URL}/pokemon/${pokemonName}`);
  return response.data.sprites.front_default;
}
