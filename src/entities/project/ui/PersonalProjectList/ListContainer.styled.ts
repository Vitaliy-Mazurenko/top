import styled from "styled-components";
import { StyledPersonalProjectCard } from "./PersonalCard.styled";
import { CardContainer } from "./PersonalProjectCard";

export const ListContainer = styled.div`
display: flex;
row-gap: 1.5rem;
column-gap: 1.5rem;
flex-wrap: wrap;
margin-top: 1.5rem;
padding: 1rem;
background-color: #F4F9FB;

${StyledPersonalProjectCard}:nth-child(1n) {
	${CardContainer} {
		background-color:rgb(255, 255, 255);
	}
}
${StyledPersonalProjectCard}:nth-child(2n) {
	${CardContainer} {
	background-color: rgb(255, 255, 255);
	}
}
${StyledPersonalProjectCard}:nth-child(3n) {
	${CardContainer} {
	background-color: rgb(255, 255, 255);
	}
}
${StyledPersonalProjectCard}:nth-child(4n) {
	${CardContainer} {
	background-color: rgb(255, 255, 255);
	}
}
${StyledPersonalProjectCard}:nth-child(5n) {
	${CardContainer} {
	background-color: rgb(255, 255, 255);
	}
}

`