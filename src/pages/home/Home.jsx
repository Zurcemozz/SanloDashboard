import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListTable from '../../components/Table/Table'
import Widge from '../../components/widget/Widge'
import './home.scss'
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widge type="user" />
          <Widge type="order" />
          <Widge type="earning" />
          <Widge type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months (Revenue)" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <ListTable />
        </div>
      </div>
    </div>
  )
}

export default Home
