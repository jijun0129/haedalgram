import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignPage from './pages/SignPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/sign",
    element: <SignPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
