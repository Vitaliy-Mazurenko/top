import { TabWrap, TabImgWrap, TabTextWrap } from "./Tab.styled";
import { Image } from "./Image";
type tabInfo = {
  text: string;
  imgSrc: string;
};

export const Tab: React.FC<tabInfo> = (props) => {
  return (
    <TabWrap>
      <TabImgWrap>
        <Image imgSrc={props.imgSrc}/>
      </TabImgWrap>
      <TabTextWrap>{props.text}</TabTextWrap>
    </TabWrap>
  );
};
