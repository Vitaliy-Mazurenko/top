import {
  StyledStatisticBlock,
  StyledBlockContent,
  PercentageText,
  InfoDescr,
} from "./StatisticBlock.styled";
type PercentageBlockInfo = {
  text: string;
  percentage: number;
  color: string;
};

const StatisticBlock: React.FC<PercentageBlockInfo> = (props) => {
  return (
    <StyledStatisticBlock {...props}>
      <StyledBlockContent>
        <PercentageText>{`%${props.percentage}`}</PercentageText>
        <InfoDescr>{props.text}</InfoDescr>
      </StyledBlockContent>
    </StyledStatisticBlock>
  );
};

export default StatisticBlock;
