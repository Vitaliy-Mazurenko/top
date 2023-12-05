import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PaginationUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  column-gap: 7px;
`;


const PaginationLi = styled.li<{
  $active: boolean;
}>`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  height: 32px;
  width: 32px;
  padding: 8px 4px;
  border-radius: 4px;
  border: 1px solid #E9E9E9;
  border-color: ${(props) =>
    props.$active ? "#956CE6" : "#E9E9E9"};
`;

const PaginationLink = styled.a<{ onClick: (page: number) => void }>` //  () => number
  text-align: center;
`;


interface childrenProps {
  projectsPerPage: number,
  totalProjects: number,
  currentPage: number,
  paginate: (page: number) => void,// setCurrentPage: (page: number) => void;    () => number,
}


export const Pagination: React.FC<childrenProps> = ({projectsPerPage, totalProjects, currentPage, paginate}): JSX.Element => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++){
    pageNumbers.push(i);
  }


  return (
    <Wrapper>
        <PaginationUl>
          {
            pageNumbers.map(number => (
              <PaginationLi key={number} $active={currentPage === number}>
                <PaginationLink  onClick={() => paginate(number)}>{number}</PaginationLink> {/* href="!#" */}
              </PaginationLi>
            ))
          }
        </PaginationUl>

    </Wrapper>
  );
};
