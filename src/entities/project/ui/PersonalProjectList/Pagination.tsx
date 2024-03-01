import styled from "styled-components";
import React, { useEffect, useState } from "react";

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
  $pasive: boolean;
}>`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #E9E9E9;
  border-color: ${(props) =>
    props.$pasive ? "transparent" : props.$active ? "#956CE6" : "#E9E9E9"};
`;

const PaginationLink = styled.a<{ onClick: (page: number) => void }>` //  () => number
  text-align: center;
  padding: 9px 9px;
  display: inline-block;
  height: 31px;
  width: 31px;
  cursor: pointer;
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
  arrOfPages: number[],
  lastPage: number,
  currentPage: number,
  paginate: (page: number) => void,// setCurrentPage: (page: number) => void;    () => number,
}


export const Pagination: React.FC<childrenProps> = ({arrOfPages, lastPage, currentPage, paginate}): JSX.Element => {

  const prevPageHandler = () => {
    if(currentPage !== 1) {
       paginate(currentPage - 1)}    
  }
  const nextPageHandler = () => {
    if(currentPage !== lastPage) {
       paginate(currentPage + 1)}    
  }

  const [arrOfCcurrentPage, setArrOfCurrentPage] = useState<Array<number>>([])

  useEffect (() => {
    let temparrOfPages: number[] = [...arrOfPages];
    temparrOfPages = [...temparrOfPages.slice(0, 4), lastPage];
    if(currentPage === 3){
      temparrOfPages = [2, 3, 4, 5, lastPage];
    }
    if(currentPage === 4 || currentPage === 5){
      temparrOfPages = [3, 4, 5, 6, lastPage];
    }
    if(currentPage > 5 ){
      temparrOfPages = [1, 2, 5, 6, lastPage];
    }
    setArrOfCurrentPage(temparrOfPages);

  },[currentPage, arrOfPages, lastPage])

  return (
    <Wrapper>
        <PaginationUl>
        <PrevPage onClick={prevPageHandler}>&lt;</PrevPage>
          {           
            arrOfCcurrentPage.map((page, index) => (
              <PaginationLi key={index} $active={currentPage === page} $pasive={(index === 3 && currentPage < 6) || (index === 1 && currentPage > 5)}>
                <PaginationLink  onClick={() => paginate(page)}>{(index === 3 && currentPage < 6) ? "..." : (index === 1 && currentPage > 5) ? "..." : page}</PaginationLink> {/* href="!#" */}
              </PaginationLi>
            ))
          }
          <NextPage onClick={nextPageHandler}>&gt;</NextPage>
        </PaginationUl>

    </Wrapper>
  );
};
