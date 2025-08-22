import username from './main.js';
import repo_name from './main.js';
async function getRepoInfo(user, repo) {
  const url = `https://api.github.com/repos/${user}/${repo}`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log({
      name: data.full_name,
      description: data.description,
      stars: data.stargazers_count,
      forks: data.forks_count,
      watchers: data.watchers_count,
      issues: data.open_issues_count,
      license: data.license?.name,
    });
  } catch (err) {
    console.error(err.message);
  }
}

getRepoInfo(username, repo_name);
export default getRepoInfo;
