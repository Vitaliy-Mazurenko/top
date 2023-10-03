import React from "react";
import { StyledBlockRow } from "./StatisticBlowRow.styled";
import StatisticBlock from "./StatisticBlock";

const StatisticBlocksSection: React.FC = () => {
  return (
    <StyledBlockRow>
      <StatisticBlock
        text="Випускників, які отримали роботу "
        percentage={2}
        color="#faeffa"
      />
      <StatisticBlock
        text="Прогрес успішності студентів"
        percentage={78}
        color="#f4f9fb"
      />
      <StatisticBlock
        text="Активність на платформі"
        percentage={67}
        color="#f0fcf9"
      />
      <StatisticBlock
        text="Статистика за завданнями "
        percentage={87}
        color="#fcfaee"
      />
      <StatisticBlock
        text="Оцінки та зворотний зв'язок від студентів"
        percentage={87}
        color="#eae2fa"
      />
    </StyledBlockRow>
  );
};

export default StatisticBlocksSection;
