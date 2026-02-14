"use client"
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <span className="static-text">COLLECTIONS OF</span>

          <div className="words">
            <div className="words-inner">
              <span className="word">MY PROJECTS</span>
              <span className="word">IDEAS</span>
              <span className="word">CREATIONS</span>
              <span className="word">CLONES</span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

  .card {
    
    padding: 1.5rem 2rem;
    border-radius: 1.25rem;
  }

  .loader {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 40px;
    height: 40px;
    color: rgb(124, 124, 124);
  }

  .static-text {
    white-space: nowrap;
  }

  .words {
    position: relative;
    overflow: hidden;
    height: 40px;
  }

  .words-inner {
    display: flex;
    flex-direction: column;
    animation: spin 8s infinite;
  }

  .word {
    height: 40px;
    display: flex;
    align-items: center;
    color: #956afa;
  }

  @keyframes spin {
    0%, 20% { transform: translateY(0); }

    25%, 45% { transform: translateY(-40px); }

    50%, 70% { transform: translateY(-80px); }

    75%, 95% { transform: translateY(-120px); }

    100% { transform: translateY(0); }
  }
`;

export default Loader;


