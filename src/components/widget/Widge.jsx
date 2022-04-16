import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUpOutlined,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import React from 'react'
import './Widge.scss'
const Widge = ({ type }) => {
  let data

  //temporary data
  const amount = 100
  const percentage = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: ' See all Users',
        icon: (
          <PersonOutlined
            className="icon"
            style={{ color: '#ff6e34', backgroundColor: '#ff6e346e' }}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: ' View All Orders',
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{ color: '#05aadb', backgroundColor: '#00c3ff75' }}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        link: ' View net earnings',
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ backgroundColor: 'lime', color: 'green' }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: ' See details',
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{ color: 'lightblue', backgroundColor: 'blue' }}
          />
        ),
      }
      break

    default:
      break
  }

  return (
    <div className="widge">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '₱'} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlined /> {percentage} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widge
