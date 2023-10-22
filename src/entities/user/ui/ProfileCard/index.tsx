import {
  SidebarImg,
  SidebarInfo,
  SidebarName,
  SidebarPosition,
} from "./styled";

interface ProfileCardProps {
  imgURL?: string;
  className?: string;
  name: string;
  position: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { name, position, imgURL, className } = props;

  return (
    <SidebarInfo className={className}>
      <SidebarImg src={imgURL} alt="sidebarimg" />
      <SidebarName>{name}</SidebarName>
      <SidebarPosition>{position}</SidebarPosition>
    </SidebarInfo>
  );
};
