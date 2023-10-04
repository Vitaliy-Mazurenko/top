import { Link } from "react-router-dom";
import styled from "styled-components";

export const TabLink = styled(Link)`
color: ${props => props.theme.palette.text};
display: flex;
align-items: center;
padding: 1rem 1rem;
gap: 1rem;

transition: background-color 0.05s, color 0.01s;
&:hover {
    background-color: #ff8c33;
    color: #fff;
}  
`

export const TabImgWrap = styled.div`
`
export const TabTextWrap = styled.div`
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
text-align: left;
`
