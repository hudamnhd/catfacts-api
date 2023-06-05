const fetchDataFromAPI = async ({ url }) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Terjadi Kesalahan: " + error.message);
  }
};

const fetchBreedsData = async (page) => {
  const url = `https://catfact.ninja/breeds?page=${page}`;
  return await fetchDataFromAPI({ url });
};

export { fetchBreedsData};
