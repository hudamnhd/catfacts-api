export const getUniqueOptions = (data, property) => {
  return Array.from(new Set(data?.map((item) => item[property])));
};
