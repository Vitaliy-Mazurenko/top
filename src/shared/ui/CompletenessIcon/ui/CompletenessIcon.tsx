import { ProgressIcon } from "shared/ui/CustomSVG/ProgressIcon";

import { IconValue, IconWrapper } from "./CompletenessIcon.styled";

interface ICompletenessIconProps {
  percentage: number;
}

const calculateColor = (percentage: number) => {
  if (percentage > 90) {
    return "#406504";
  } else if (percentage > 50) {
    return "#FF9500";
  } else if (percentage > 25) {
    return "#80BAD9";
  } else {
    return "#DF2209";
  }
};

export const CompletenessIcon = ({ percentage }: ICompletenessIconProps) => {
  const color = calculateColor(percentage);

  return (
    <IconWrapper $color={color}>
      <ProgressIcon color={color} />
      <IconValue>%{percentage}</IconValue>
    </IconWrapper>
  );
};
