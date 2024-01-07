export const useFetchPost = (id, options = { lazy: true }) => {
  return useFetch(`/api/posts/${id}`, options);
};
