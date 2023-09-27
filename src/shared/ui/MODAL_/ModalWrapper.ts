import styled from "styled-components";

export const ModalWrapper = styled.div<{ $center?: boolean }>`
position: relative;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0, 0, 0, 0.25);

${props => props.$center &&
	css`
	display: flex;
	justify-content: space-between;
	align-content: ;
`
}
`