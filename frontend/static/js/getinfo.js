document
  .getElementById("repoForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const repo_name = document.getElementById("repo_name").value;

    // Create JSON data
    const data = {
      username: username,
      repo_name: repo_name,
    };

    try {
      const response = await fetch("/api/pinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      document.getElementById("result").textContent = JSON.stringify(
        result,
        null,
        2
      );
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("result").textContent = "Error submitting form";
    }
  });
