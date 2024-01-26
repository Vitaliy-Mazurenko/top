import styled from "styled-components";

export const WrapperCards = styled.div`
display: flex;
row-gap: 0.9rem;
column-gap: 1rem;
flex-wrap: wrap;
margin-top: 1.1rem;
margin-right: 0.5rem;
padding: 1rem 0 1rem 1rem;
max-height: calc(100vh - 186px);
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;           /* width of the entire scrollbar */
}
&::-webkit-scrollbar-track {
  background: white; 
  margin-top: 15px;         /* color of the tracking area */
}
&::-webkit-scrollbar-thumb {
  background-color: #E9E9E9;    /* color of the scroll thumb */
  border-radius: 18px;       /* roundness of the scroll thumb */
  border: 2px solid white;  /* creates padding around scroll thumb */
}
`
export const WrapperContent = styled.div`
background-color: #f4f9fb;
padding-bottom: 0.5rem;
`