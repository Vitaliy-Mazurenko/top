import styled from "styled-components";
import { Number } from "./Number.styled";

export const NumberList = styled.div`
	display: flex;
	justify-content: center;
	${Number}:nth-child(1) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
	${Number}:nth-child(2) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`