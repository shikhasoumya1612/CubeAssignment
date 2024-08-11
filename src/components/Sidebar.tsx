import { Dispatch, SetStateAction } from "react";
import { User } from "../types/types";
import Card from "./Card";

interface SidebarProps {
  users: User[];
  currentPage: number;
  selectedUser: User | null;
  onClick: (user: User) => void;
  setShowLoader: Dispatch<SetStateAction<Boolean>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  users,
  selectedUser,
  onClick,
  currentPage,
  setShowLoader,
  setCurrentPage,
}) => {
  return (
    <>
      {users.length > 0 && (
        <div>
          {users.map((user: User) => (
            <Card
              user={user}
              onClick={onClick}
              key={user.login.uuid}
              selected={selectedUser?.login.uuid === user.login.uuid}
            />
          ))}

          <div className="pagination">
            <div>Page : {currentPage}</div>
            <div className="nav-container">
              <button
                className="nav-button previous"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                &lt;
              </button>
              <button
                className="nav-button next"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
