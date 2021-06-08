import apiEndpoints from "../shared/constants/endpoints";

export async function getPosts() {
  const data = await fetch(apiEndpoints.POSTS);
  return await data.json();
}

export async function getPost(postId) {
  const data = await fetch(`${apiEndpoints.POSTS}/${postId}`);
  return await data.json();
}

export async function getPostsByUser(userId) {
  const data = await fetch(`${apiEndpoints.USERS}/${userId}/posts`);
  return await data.json();
}

export async function getCommentsFromPost(postId) {
  const data = await fetch(`${apiEndpoints.POSTS}/${postId}/comments`);
  return await data.json();
}

export async function getUsers() {
  const data = await fetch(apiEndpoints.USERS);
  return await data.json();
}

export async function getUser(userId) {
  const data = await fetch(`${apiEndpoints.USERS}/${userId}`);
  return await data.json();
}