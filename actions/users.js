import useSWR from "swr";

export function useUsers() {
  const url = `/users?_sort=createdAt&_order=desc`;
  const { data, error } = useSWR(url);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useUser(id) {
  const url = `/users/${id}`;
  const { data, error } = useSWR(url);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
