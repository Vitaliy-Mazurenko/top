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
  margin-right: 3.5%;
`;


const PaginationLi = styled.li<{
  $active: boolean;
}>`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #E9E9E9;
  border-color: ${(props) =>
    props.$active ? "#956CE6" : "#E9E9E9"};
`;

const PaginationLink = styled.a<{ onClick: (page: number) => void }>` //  () => number
  text-align: center;
  padding: 9px 9px;
  display: inline-block;
  height: 31px;
  width: 31px;
`;

const PrevPage = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  height: 32px;
  width: 32px;
  padding: 8px 4px;
  border-radius: 4px;
  border: 1px solid #E9E9E9;
`;

const NextPage = styled.span`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  height: 32px;
  width: 32px;
  padding: 8px 4px;
  border-radius: 4px;
  border: 1px solid #E9E9E9;
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

  const prevPageHandler = () => {
    if(currentPage !== 1) {
       paginate(currentPage - 1)}    
  }
  const nextPageHandler = () => {
    if(currentPage !== Math.ceil(totalProjects / projectsPerPage)) {
       paginate(currentPage + 1)}    
  }

  return (
    <Wrapper>
        <PaginationUl>
        <PrevPage onClick={prevPageHandler}>&lt;</PrevPage>
          {           
            pageNumbers.map(number => (
              <PaginationLi key={number} $active={currentPage === number}>
                <PaginationLink  onClick={() => paginate(number)}>{number === (Math.ceil(totalProjects / projectsPerPage) - 1) ? "..." : number}</PaginationLink> {/* href="!#" */}
              </PaginationLi>
            ))
          }
          <NextPage onClick={nextPageHandler}>&gt;</NextPage>
        </PaginationUl>

    </Wrapper>
  );
};
