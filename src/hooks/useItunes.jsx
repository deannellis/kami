import { useQuery } from "react-query";
import axios from "axios";

const getData = async ({ queryKey }) => {
  const [_key, { limit, skip }] = queryKey;
  const baseURL = "https://itunes.apple.com/search?term=weezer";
  const queryURL = !!skip
    ? `${baseURL}&offset=${skip}&limit=${limit}`
    : `${baseURL}&limit=${limit}`;
  const { data } = await axios.get(queryURL);
  const rawRequest = await axios.get(`${baseURL}&limit=64`);
  const { resultCount } = rawRequest.data;
  const queryResult = { constrainedQuery: data, resultCount };
  return queryResult;
};

export default function useItunes(limit = 30, skip = 0) {
  return useQuery(["songs", { limit, skip }], getData, {
    keepPreviousData: true,
  });
}
