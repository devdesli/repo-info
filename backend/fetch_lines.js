import username from './main.js';
import repo_name from './main.js';
async function getData(username, repo_name) {
  const url = `https://api.codetabs.com/v1/loc?github=${username}/${repo_name}`;
  console.log("Fetching:", url); // debug
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getData(username, repo_name);
export default getData;
