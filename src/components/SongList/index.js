import React, { useState } from "react";

import useItunes from "../../hooks/useItunes";
import Pagination from "../Pagination";
import LoadingAnimation from "../LoadingAnimation";

const SongList = () => {
  const queryLimit = 7;
  const [querySkip, setQuerySkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching, status, error } = useItunes(queryLimit, querySkip);
  return (
    <div>
      <h2>Weezer Songs</h2>
      <div className="song-list">
        <>
          <div className="song-list__rows">
            {status === "loading" ? (
              <div className="song-list__placeholder">
                <LoadingAnimation />
              </div>
            ) : status === "error" ? (
              <div className="song-list__placeholder">
                <span>
                  <b>Error:</b> {error.message}
                </span>
              </div>
            ) : isFetching ? (
              <div className="song-list__placeholder">
                <LoadingAnimation />
              </div>
            ) : (
              data.constrainedQuery.results.map(
                ({ trackName, collectionName, artworkUrl60 }) => (
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
                )
              )
            )}
          </div>
          {status !== "loading" && (
            <Pagination
              totalRecords={data.resultCount}
              pageLimit={queryLimit}
              pageNeighbors={1}
              currentPage={currentPage}
              onPageChanged={(paginationData) => {
                const { currentPage } = paginationData;
                setCurrentPage(currentPage);
                setQuerySkip((currentPage - 1) * queryLimit);
              }}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default SongList;
