export interface ITabInfo {
  text: string;
  leftIcon?: string | React.ReactNode;
  rightIcon?: string | React.ReactNode;
  to?: string;
  onClick?: () => void;
}
