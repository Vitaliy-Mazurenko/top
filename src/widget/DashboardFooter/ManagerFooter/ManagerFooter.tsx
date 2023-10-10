import {
  FooterTabsWrap,
  FooterWrap
} from "../Tabs/TabsPanel.styled";
import { FooterTabs } from "./FooterTabs";

interface IManagerFooterProps {
  className?: string;
}

export const ManagerFooter: React.FC<IManagerFooterProps> = ({ className }) => {
  return (
    <FooterWrap className={className}>
      <FooterTabsWrap>
        <FooterTabs />
      </FooterTabsWrap>
    </FooterWrap>
  );
};
