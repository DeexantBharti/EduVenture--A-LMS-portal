import React from 'react'
import { Outlet } from 'react-router-dom';
export default function Educator() {
  return (
    <div>
        <h1>
            Educator

        </h1>
        <div>
      {<Outlet/>}
        </div>
    </div>
  )
}
