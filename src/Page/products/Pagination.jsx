import React from "react";
import "./pagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
          window.scrollTo(0, 0);
        }}
        className="page previous"
      >
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>
      {generatedPages.map((page) => (
        <div
          onClick={() => {
            setCurrentPage(page);
            window.scrollTo(0, 0);
          }}
          className={currentPage === page ? "page active" : "page"}
          key={page}
        >
          {page}
        </div>
      ))}
      <button
        disabled={currentPage === pages}
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
          window.scrollTo(0, 0);
        }}
        className="page next"
      >
        التالي
        <i className="bi bi-arrow-left"></i>
      </button>
    </div>
  );
};

export default Pagination;
