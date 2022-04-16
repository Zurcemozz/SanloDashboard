import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import { Link } from 'react-router-dom'
import { userColumns, userRows } from '../../datatablesource'
import './database.scss'

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      },
    },
  ]
  return (
    <div className="database">
      <div className="datatableTitle">
        Add new User
        <Link
          to="/users/new"
          style={{ textDecoration: 'none' }}
          className="link"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
