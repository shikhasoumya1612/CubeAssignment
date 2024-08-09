import { Dispatch, SetStateAction } from "react";
import { User } from "../types/types";
import Card from "./Card";

interface SidebarProps {
  users: User[];
  selectedUser: User | undefined;
  onClick: (user: User) => void;
  setShowLoader: Dispatch<SetStateAction<Boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  users,
  selectedUser,
  onClick,
  setShowLoader,
}) => {
  return (
    <div>
      {users.map((user: User) => (
        <Card
          user={user}
          onClick={onClick}
          key={user.id}
          selected={selectedUser?.id === user.id}
        />
      ))}
    </div>
  );
};

export default Sidebar;
