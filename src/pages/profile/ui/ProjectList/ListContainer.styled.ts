import styled from "styled-components";
import { StyledProjectCard } from "./ProjectCard.styled";
import { CardContainer } from "../ProjectCard";

export const ListContainer = styled.div`
display: flex;
row-gap: 3.75rem;
column-gap: 1.75rem;
flex-wrap: wrap;
margin-top: 2rem;

${StyledProjectCard}:nth-child(1n) {
	${CardContainer} {
		background-color:rgba(168, 186, 219, 1);
	}
}
${StyledProjectCard}:nth-child(2n) {
	${CardContainer} {
	background-color: rgb(250, 253, 255);
	}
}
${StyledProjectCard}:nth-child(3n) {
	${CardContainer} {
	background-color: rgb(233, 227, 245);
	}
}
${StyledProjectCard}:nth-child(4n) {
	${CardContainer} {
	background-color: rgb(250, 253, 255);
	}
}
${StyledProjectCard}:nth-child(5n) {
	${CardContainer} {
	background-color: rgb(255, 252, 243);
	}
}

`