import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.less'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import './index.css'

import router from './router/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
