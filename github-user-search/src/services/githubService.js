import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  const baseUrl = "https://api.github.com/search/users?q=";

  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`${baseUrl}${query}`);
  return response.data;
};
