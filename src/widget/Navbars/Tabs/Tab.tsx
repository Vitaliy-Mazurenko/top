import { TabLink, TabImgWrap, TabTextWrap } from "./Tab.styled";
import { TabIcon } from "../Image";

type tabInfo = {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  to?: string
  onClick?: () => void
}

export const Tab: React.FC<tabInfo> = (props) => {
  const {
    to = '',
    text,
    onClick,
    leftIcon,
    rightIcon
  } = props

  return (
    <TabLink to={to} onClick={onClick}>
      <TabImgWrap>
        {leftIcon && <TabIcon src={leftIcon} />}
      </TabImgWrap>
      <TabTextWrap>{text}</TabTextWrap>
      <TabImgWrap style={{ marginLeft: 'auto' }}>
        {rightIcon && <TabIcon src={rightIcon} />}
      </TabImgWrap>
    </TabLink>
  )
}
