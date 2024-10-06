import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx';
import Auth from './pages/auth/Auth.jsx';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import DashboardSection from './components/Dashboard/sections/DashboardSection.jsx';
import WaterResourceAnalyzer from './components/Dashboard/sections/WaterResourceAnalyzer.jsx';
import CropPlanningAssistant from './components/Dashboard/sections/CropPlanningAssistant.jsx';
import Help from './components/Dashboard/sections/Help.jsx';
import Settings from './components/Dashboard/sections/Settings.jsx';
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
        element: <About />,
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
        element: <Dashboard />,
        children: [
         
          {
            path: "sections/water-resource-analyzer",
            element: <WaterResourceAnalyzer />,
          },
          {
            path: "sections/crop-planning-assistant",
            element: <CropPlanningAssistant />,
          },
          {
            path: "sections/help",
            element: <Help />,
          },
          {
            path: "sections/settings",
            element: <Settings />,
          },
        ],
      }
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
