import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const UserAvatar = () => {
  const { user } = useUser();
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0).toUpperCase()}
        {user?.lastName?.charAt(0).toUpperCase()}
        {/* {user?.firstName?.charAt(0).toUpperCase() + user?.lastName?.charAt(0).toUpperCase()} */}
      </AvatarFallback>
    </Avatar>
  );
};
