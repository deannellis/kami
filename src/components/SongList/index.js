import React from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

import useItunes from "../../hooks/useItunes";

const SongList = () => {
  const { status, data, error, isFetching } = useItunes();
  //   const queryClient = useQueryClient();
  return (
    <div>
      <h2>Weezer Songs</h2>
      <div className="song-list">
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <div>
            {data.results.map(({ trackName, collectionName, artworkUrl60 }) => (
              <div className="song-list__row">
                <img
                  src={artworkUrl60}
                  height="56px"
                  alt={`${collectionName} artwork`}
                />
                <div>
                  <p>{trackName}</p>
                  <p>{collectionName}</p>
                </div>
              </div>
            ))}
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongList;
