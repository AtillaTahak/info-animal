import { createGlobalStyle } from 'styled-components';

const GlobalStye = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Mochiy+Pop+One&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&family=Permanent+Marker&family=Roboto+Slab:wght@300;400;500;600;900&family=Source+Code+Pro:wght@400;500;600;700&display=swap');

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: large;
    font-weight: bold;
    font-family: 'Permanent Marker', cursive;
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
    box-sizing: border-box;
}

.search{
  margin-top: 20px;
  padding: 10px 10px;
  background-color: #a5aeff;
  border: none;
}
ul{
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  background-color: #a5aeff;
  grid-gap: 4px;
  list-style: none;

}
ul li {
  border: 1px solid #6b76ff;
  margin: 10px;
  background-color: #c8e4fe;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  list-style: none;
  transition: .3s;
  width: 100%;
  height: 10rem;
  display:flex;
  flex-direction:columns;
  align-items: center;
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
.ListContainer{
  height: 160px;
}
`;

export default GlobalStye;
