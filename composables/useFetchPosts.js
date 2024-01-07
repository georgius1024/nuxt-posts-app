export const useFetchPosts = (options = { lazy: true }) => {
  return useFetch("/api/posts", options);
};
