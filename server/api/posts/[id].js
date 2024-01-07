import posts from "../posts.json";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  return posts.find(e => e.id === Number(id));
});
