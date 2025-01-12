"use client";

import React, { useState } from "react";
import CharactersList from "./CharactersList";

const Pager = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 30) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const styles = {
    pager: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    pageNumbers: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap",
      maxWidth: "600px",
    },
    pageNumber: {
      padding: "5px 10px",
      border: "1px solid #ccc",
      backgroundColor: "#333333",
      cursor: "pointer",
    },
    activePageNumber: {
      backgroundColor: "#808080",
      color: "#ffff",
      // borderColor: "#808080",
    },
    disabledButton: {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  };

  return (
    <div className="">
      <CharactersList currentPage={currentPage} />
      <div className="mt-2 ml-2" style={styles.pager}>
        <button
          className=" w-20 ml-6 text-xs bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={currentPage === 1 ? styles.disabledButton : {}}
        >
          Back
        </button>
        <div style={styles.pageNumbers}>
          {Array.from({ length: 15 }, (_, index) => (
            <button
              className="rounded-full w-10"
              key={index + 1}
              style={{
                ...styles.pageNumber,
                ...(currentPage === index + 1 ? styles.activePageNumber : {}),
              }}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="w-20 mr-9 text-xs bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
          disabled={currentPage === 15}
          style={currentPage === 15 ? styles.disabledButton : {}}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pager;