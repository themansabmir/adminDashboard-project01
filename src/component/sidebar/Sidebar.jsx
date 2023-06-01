import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className='logo'>Mansab Mir</span>
        </Link>
      </div>
      <div className='center'>
        <ul>
          <p className='title'>Main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>dahboard</span>
          </li>
          <p className='title'>Lists</p>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>

          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>Useful Links</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>Service</p>
          <li>
            <HealthAndSafetyIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>User</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;
