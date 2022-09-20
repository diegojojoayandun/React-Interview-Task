const getReactRepositories = async () => {
  const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";
  const res = await fetch(SEARCH_ENDPOINT);
  const item = await res.json();

  return item;
};

export default getReactRepositories;
