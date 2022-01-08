import { createGlobalStyle } from 'styled-components';

const GlobalStye = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: large;
    font-weight: bold;
  }
  
body{
  font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #6b76ff;
}

.search{
  margin-top: 20px;
  padding: 10px 10px;
  background-color: #a5aeff;
  border: none;
}
ul{
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  list-style: none;
  background-color: #a5aeff;

}
ul li {
  border: 1px solid #6b76ff;
  margin: 10px;
  background-color: #c8e4fe;
  box-shadow: 1em;
  &:hover{
    transform: scale(1.07);
  }
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.home-go-back {
  position: fixed;
  top: 25px;
  right: 50px;
  font-size: 40px;
  z-index: 25;
}
`;

export default GlobalStye;
