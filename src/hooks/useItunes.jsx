import { useQuery } from "react-query";
import axios from "axios";

const getData = async () => {
  const { data } = await axios.get(
    "https://itunes.apple.com/search?term=weezer&limit=10"
  );
  console.log("here ->", data);
  return data;
};

export default function useItunes() {
  return useQuery("songs", getData);
}
