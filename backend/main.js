import getData from "./fetch_lines.js";
import getRepoInfo from "./gith_data.js";

async function API(getData, getRepoInfo, username, repo_name) {
  // Fetch Data from API'S
  getData(username, repo_name);
  getRepoInfo(username, repo_name);
}

export default API;
