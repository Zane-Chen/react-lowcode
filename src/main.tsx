import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import './index.css'
import Root, { 
  loader as rootLoader,
  action as rootAction
} from './router/root'
import Contact, {
  loader as contactLoader
} from "./router/contact";
import EditContact, {
  action as editAction
} from './router/edit'
import { action as deleteAction } from './router/destory'
import ErrorPage from "./pages/common/error";
import Index from './router'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />, 
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteAction,
        errorElement: <div>Opps! ERROR!</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
