export interface ITabInfo {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  to?: string;
  onClick?: () => void;
}
