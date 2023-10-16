import styled from "styled-components";
import logoHeader from 'shared/assets/img/logo.svg'
import menuIcon from 'shared/assets/img/leading-icon.svg'

export const MobileHeaderWrapper = styled.div `
display: none;
@media (max-width: 480px) {
    width: 100vw;
    height: 64px;
    background: #f4f9fb;
    display: flex;
    flex-direction: row;
    gap: 15%;
  }
  
`

export const MobileHeaderLogo = styled.img `
    width: 171px;
    height: 56px;
    padding-right: 10px;
    padding-top: 5px;
`

const MobileHeader = () => {
  return (
    <MobileHeaderWrapper>
        <img src={menuIcon} alt="" />
        <MobileHeaderLogo src={logoHeader} alt="" />
    </MobileHeaderWrapper>
  )
}

export default MobileHeader