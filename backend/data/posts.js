const fs = require("node:fs/promises");

async function getStoredPosts() {
  try {
    const rawFileContent = await fs.readFile("posts.json", { encoding: "utf-8" });
    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
  } catch (error) {
    if (error.code === "ENOENT") {
      // File does not exist yet; return empty list and allow first post to create it.
      return [];
    }
    throw error;
  }
}

function storePosts(posts) {
  return fs.writeFile("posts.json", JSON.stringify({ posts: posts || [] }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
