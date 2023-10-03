import { FC } from "react";

import { UserName, UserWrapper } from "./UserCredentials.styled";
import { UserAvatar } from "shared/ui/UserAvatar";

interface IUserCredentials {
  firstName: string;
  lastName: string;
  src?: string;
}

export const UserCredentials: FC<IUserCredentials> = ({
  src,
  firstName,
  lastName,
}) => {
  return (
    <UserWrapper>
      <UserAvatar src={src} initials={`${firstName[0]}${lastName[0]}`} />
      <UserName>
        {firstName} {lastName}
      </UserName>
    </UserWrapper>
  );
};
