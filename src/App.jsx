import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx'
import Auth from './pages/auth/Auth.jsx';
import './App.css';
import Content from './components/Dashboard/content/Content.jsx';
import Sidebar from './components/Dashboard/sidebar/Sidebar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: '/auth', 
        element: <Auth />, 
      },
      {
        path: "/dashboard",
        element: (
          <div className="dashboard-container">
            <Sidebar />
            <Content />
          </div>
        ),
      }
    ],
  },

]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
