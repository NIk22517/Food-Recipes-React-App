import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/serached/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type='text'
          value={input}
        />
      </div>
    </FormStyle>
  );
};

export default Search;

const FormStyle = styled.form`
  margin: 0 15rem;
  div {
    position: relative;
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 1rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    margin-left: 1.5rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media (max-width: 800px) {
    margin: 0rem;
  }
`;
