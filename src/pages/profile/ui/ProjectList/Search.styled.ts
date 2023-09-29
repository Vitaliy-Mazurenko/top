import styled from "styled-components";
import searchIconURL from 'shared/assets/icons/search.svg'

// TODO: refactoring icon
export const Search = styled.input.attrs({
	placeholder: 'Search',
})`
	padding: 0.3125rem 0.75rem 0.3125rem calc(0.75rem + 1rem);
	background: url(${searchIconURL}) center left no-repeat;
	border-radius: 0.25rem;
	border: 1px solid rgba(232, 232, 232, 1);
	
`
