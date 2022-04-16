import React from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListTable from '../../components/Table/Table'
import './single.scss'
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="editButton">Edit</div>
            <div className="item">
              <img
                src="https://i.ibb.co/LQz9xwS/217583322-337164201401105-7085131122206820791-n.png"
                alt=""
                className="imgItem"
              />
              <div className="details">
                <h1 className="itemTitle">Emmanuel</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">zurcemozz@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">12345</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Holy SPirit Quezon City</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Philippines </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>

          <ListTable />
        </div>
      </div>
    </div>
  )
}

export default Single
