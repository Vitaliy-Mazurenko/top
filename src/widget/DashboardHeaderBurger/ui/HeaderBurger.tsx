import { useState } from 'react';
import styled from 'styled-components';
import LeftNav from "./LeftNav";


export interface isOpen {
  open?: boolean,
  onClick: (event: React.MouseEvent) => void,
}


const StyledBurger = styled.div.attrs<{ open?: boolean }>({ open: false })`
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  top: 25px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 1079px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.5rem;
    height: 0.15rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    transform-origin: 1px;
    transition: all 0.3s linear;

  }
`;

const HeaderBurger: React.FC<isOpen> = () => {

  const [open, setOpen] = useState<boolean>(false);
  
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
