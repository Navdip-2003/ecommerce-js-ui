import React from 'react'
import { Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  )
}
export default MainLayout
