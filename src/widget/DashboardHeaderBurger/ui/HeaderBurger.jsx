import { useState } from 'react';
import styled from 'styled-components';
import LeftNav from "./LeftNav";

// import {
//   StyledHeader,
// } from "./Dashboard.styled";

// export interface isOpen {
//   open: boolean;
//   onClick: () => void; 
// }


const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 1079px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    transform-origin: 1px;
    transition: all 0.3s linear;

  }
`;

const HeaderBurger = () => {

  const [open, setOpen] = useState(false);
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open}/>
    </>
  )
}

export default HeaderBurger;
