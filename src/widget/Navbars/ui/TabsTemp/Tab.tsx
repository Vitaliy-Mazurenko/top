import { TabLink, TabImgWrap, TabTextWrap, TabIcon } from "./Tab.styled";

type tabInfo = {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  to?: string;
  onClick?: () => void;
};

export const Tab: React.FC<tabInfo> = (props) => {
  const { to = "", text, onClick, leftIcon, rightIcon } = props;

  return (
    <TabLink to={to} onClick={onClick}>
      <TabImgWrap>{leftIcon && <TabIcon src={leftIcon} />}</TabImgWrap>
      <TabTextWrap>{text}</TabTextWrap>
      {rightIcon && (
        <TabImgWrap style={{ marginLeft: "auto" }}>
          <TabIcon src={rightIcon} />
        </TabImgWrap>
      )}
    </TabLink>
  );
};
