import * as React from "react";
import { useState } from "react";

const getRange = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
};

type PagingationProps = {
  totalRecords: number;
  pageLimit?: number;
  pageNeighbors?: number;
  currentPage: number;
  onPageChanged: (paginationData: {}) => void;
};

const Pagination = ({
  totalRecords,
  pageLimit = 30,
  pageNeighbors = 0,
  currentPage,
  onPageChanged,
}: PagingationProps) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);
  const LEFT_PAGE: string = "LEFT";
  const RIGHT_PAGE: string = "RIGHT";
  const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);

  const gotoPage = (page: number) => {
    const newCurrentPage = Math.max(0, Math.min(page, totalPages));
    const paginationData = {
      currentPage: newCurrentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };
    setLocalCurrentPage(newCurrentPage);
    onPageChanged(paginationData);
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page !== "number") return;
    gotoPage(page);
  };
  const handlePageRight = () => {
    gotoPage(localCurrentPage + pageNeighbors * 2 + 1);
  };
  const handlePageLeft = () => {
    gotoPage(localCurrentPage - pageNeighbors * 2 - 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, localCurrentPage - pageNeighbors);
      const endPage = Math.min(
        totalPages - 1,
        localCurrentPage + pageNeighbors
      );
      let pages: (string | number)[] = getRange(startPage, endPage);
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = getRange(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = getRange(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return getRange(1, totalPages);
  };

  if (!totalRecords || totalPages === 1) return null;
  const pages = fetchPageNumbers();
  return (
    <>
      <nav>
        <ul className="pagination">
          {pages.map((page) => {
            if (page === LEFT_PAGE) {
              return (
                <li className="pagination__list-item" key="page-left-button">
                  <button
                    className="pagination__button button--no-style"
                    onClick={handlePageLeft}
                  >
                    &#8592;
                  </button>
                </li>
              );
            }
            if (page === RIGHT_PAGE) {
              return (
                <li className="pagination__list-item" key="page-right-button">
                  <button
                    className="pagination__button button--no-style"
                    onClick={handlePageRight}
                  >
                    &#8594;
                  </button>
                </li>
              );
            }
            return (
              <li
                className={`pagination__list-item${
                  localCurrentPage === page ? "--active" : ""
                }`}
              >
                <button
                  className="pagination__button button--no-style"
                  onClick={() => {
                    handlePageClick(page);
                  }}
                  key={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
