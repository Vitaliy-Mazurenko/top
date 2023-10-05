import { FC } from "react";

import { UserImageWrapper } from "./UserAvatar.styled";

interface IUserAvatProps {
  src?: string;
  initials?: string;
}

export const UserAvatar: FC<IUserAvatProps> = ({ src, initials }) => {
  return (
    <UserImageWrapper>
      {src ? <img src={src} alt="user avatar" /> : initials}
    </UserImageWrapper>
  );
};
