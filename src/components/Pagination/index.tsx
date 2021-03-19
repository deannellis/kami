import * as React from "react";
import { useState } from "react";

const getRange = (from: number, to: number, step = 1) => {
  console.log("hiya -> ", typeof from);
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

  const handlePageClick = (page: number) => (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    gotoPage(page);
  };
  const handlePageRight = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gotoPage(localCurrentPage + pageNeighbors * 2 + 1);
  };
  const handlePageLeft = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
                <li className="pagination__button" key="page-left-button">
                  <a
                    href="#"
                    className="pagination__link"
                    onClick={handlePageLeft}
                  >
                    &#8592;
                  </a>
                </li>
              );
            }
            if (page === RIGHT_PAGE) {
              return (
                <li className="pagination__button" key="page-right-button">
                  <a
                    href="#"
                    className="pagination__link"
                    onClick={handlePageRight}
                  >
                    &#8594;
                  </a>
                </li>
              );
            }
            return (
              <li
                className={`pagination__button${
                  localCurrentPage === page ? "--active" : ""
                }`}
              >
                <a
                  href="#"
                  className="pagination__link"
                  onClick={handlePageClick(page)}
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
