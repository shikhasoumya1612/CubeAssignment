import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Details from "../components/Details";
import { User } from "../types/types";
import "../styles/Sidebar.css";

interface CustomerInfoProps {
  setShowLoader: Dispatch<SetStateAction<Boolean>>;
  showLoader: Boolean;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  showLoader,
  setShowLoader,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const selectUser = (user: User) => {
    setIsSidebarOpen(false);
    setSelectedUser(user);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setShowLoader(true);
    const USER_API = `https://randomuser.me/api/?page=${currentPage}&results=8`;
    fetch(USER_API)
      .then((res) => res.json())
      .then((res) => {
        setShowLoader(false);
        setUsers(res.results);
        setSelectedUser(res.results[0]);
      });
  }, [currentPage, setShowLoader]);

  return (
    <div>
      <Header />
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`overlay ${isSidebarOpen ? "open" : ""}`}>
        <Sidebar
          users={users}
          onClick={selectUser}
          selectedUser={selectedUser}
          setShowLoader={setShowLoader}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div className="content">
        <div className={`col-3 sidebar ${isSidebarOpen ? "visible" : ""}`}>
          <Sidebar
            users={users}
            onClick={selectUser}
            selectedUser={selectedUser}
            setShowLoader={setShowLoader}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className={`col-9 ${isSidebarOpen ? "shifted" : ""}`}>
          {selectedUser && (
            <Details
              user={selectedUser}
              setShowLoader={setShowLoader}
              showLoader={showLoader}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
