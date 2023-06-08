import fetchDataFromAPI from "./apiConfig";

const fetchBreedsData = async (page) => {
  const url = `https://catfact.ninja/breeds?page=${page}`;
  return await fetchDataFromAPI({ url });
};

export default fetchBreedsData;
