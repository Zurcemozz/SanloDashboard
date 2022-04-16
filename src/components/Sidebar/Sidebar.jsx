import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import StoreIcon from '@mui/icons-material/Store'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import './Sidebar.scss'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">Sanlo Store</div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">MAIN</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />

            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />

            <span>Delivery</span>
          </li>
          <p className="title">USEFULL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />

            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />

            <span>Syetem Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />

            <span>Logs</span>
          </li>
          <p className="title">USER</p>

          <li>
            <SettingsApplicationsIcon className="icon" />

            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />

            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />

            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOptions"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar
