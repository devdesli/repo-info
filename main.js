import API from "./backend/main.js";
import getData from "./backend/fetch_lines.js";
import getRepoInfo from "./backend/gith_data.js";

// Get command line arguments
const username = process.argv[2];
const repo_name = process.argv[3];

if (!username || !repo_name) {
  console.error("Please provide username and repository name");
  process.exit(1);
}

try {
  const result = await API(getData, getRepoInfo, username, repo_name);
  console.log(JSON.stringify(result));
} catch (error) {
  console.error(error);
  process.exit(1);
}
