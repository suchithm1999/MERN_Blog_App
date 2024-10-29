import DashSidebar from "../components/DashSidebar";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import DashProfile from "../components/DashProfile";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="min-h-screen ">
        <DashSidebar tab={tab} />
      </div>
      <div>{currentUser && tab === "profile" && <DashProfile />}</div>
    </div>
  );
};

export default Dashboard;
