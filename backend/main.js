import getData from "./fetch_lines.js";
import getRepoInfo from "./gith_data.js";

async function API(getData, getRepoInfo, username, repo_name) {
  try {
    // Fetch Data from API'S in parallel
    const [linesData, repoData] = await Promise.all([
      getData(username, repo_name),
      getRepoInfo(username, repo_name),
    ]);

    return {
      lines: linesData,
      repo: repoData,
    };
  } catch (error) {
    console.error("Error in API:", error);
    throw error;
  }
}

export default API;
