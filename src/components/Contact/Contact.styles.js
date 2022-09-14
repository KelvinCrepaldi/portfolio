import styled from "styled-components";

export const ContactContainer = styled.div`
  justify-content: center;
  flex-grow: 1;

  .form {
    width: 100%;
    min-width: 250px;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 20px auto;
  }

  input,
  textarea {
    height: 30px;
    background: none;
    border: none;

    color: var(--h1-color);
    border-bottom: 2px solid var(--title-homepage);
    font-size: 18px;
    padding: 5px;
    transition: 0.3s;
  }

  input:focus,
  textarea:focus {
    color: #00a7a7;
    border-color: #008080;
    outline: none;
  }

  textarea {
    height: 100px;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    color: #dadada;
    margin-top: 20px;
  }

  button {
    margin: 10px auto;
    padding: ;
  }
  a {
    font-size: 50px;
  }

  .error-message {
    margin: 10px;
    color: #fd2600;
  }
`;
