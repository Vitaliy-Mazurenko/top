import { FC } from "react";

import { UserAvatar } from "shared/ui/UserAvatar";

import { UserName, UserWrapper } from "./UserCredentials.styled";

interface IUserCredentials {
  firstName: string;
  lastName: string;
  src?: string;
  className?: string;
}

export const UserCredentials: FC<IUserCredentials> = ({
  src,
  firstName,
  lastName,
  className,
}) => {
  return (
    <UserWrapper className={className}>
      <UserAvatar src={src} initials={`${firstName[0]}${lastName[0]}`} />
      <UserName>
        {firstName} {lastName}
      </UserName>
    </UserWrapper>
  );
};
