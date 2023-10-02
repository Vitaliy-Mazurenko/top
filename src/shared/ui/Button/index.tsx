import styled, { css } from "styled-components";

//если variant не указан вовсе, то по умолчанию он равен primary
export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
	width: 100%;
padding: 1rem;
	
	${({ theme, $variant = 'primary' }) => $variant === 'primary' && css`
	background-color: ${theme.palette.primary}; // если вариант primary, то задаем такой css
	color: white;
	`};

	${({ theme, $variant = 'primary' }) => $variant === 'secondary' && css`
	// если вариант secondary, то задаем такой css
	background: none;
	color: ${theme.palette.text};
	border: 2px solid ${theme.palette.primary} 
	`}
`
