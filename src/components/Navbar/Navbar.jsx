import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationAddOutlined,
  SearchOutlined,
} from '@mui/icons-material'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import './Navbar.scss'

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" /> English
          </div>
          <div className="item">
            <DarkModeOutlined
              className="icon"
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationAddOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://i.ibb.co/LQz9xwS/217583322-337164201401105-7085131122206820791-n.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
