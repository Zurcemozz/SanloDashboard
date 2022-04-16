import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVertOutlined,
} from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './featured.scss'

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount"> $420 </p>
        <p className="desc"> Previous Sales </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown />
              <div className="itemAmount">12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive ">
              <KeyboardArrowUp />
              <div className="itemAmount">12k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative ">
              <KeyboardArrowDown />
              <div className="itemAmount">12k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
