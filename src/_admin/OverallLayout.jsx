import React from 'react'
import { Outlet } from 'react-router-dom'

const OverallLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default OverallLayout