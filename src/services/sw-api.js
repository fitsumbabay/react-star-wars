
export const getAllStarships = async () => {
  const response = await fetch('https://swapi.dev/api/starships/');
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response;
};