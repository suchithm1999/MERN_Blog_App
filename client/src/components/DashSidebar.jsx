import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiChartPie, HiUser } from "react-icons/hi";

const DashSidebar = ({ tab }) => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Sidebar className="w-full md:w-56 min-h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {currentUser && (
            <Link to="/dashboard?tab=dash">
              <Sidebar.Item icon={HiChartPie} active={tab === "dash"} as="div">
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item icon={HiUser} active={tab === "profile"} as="div">
              Profile
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
