import Navbar from './components/navbar/Navbar.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx';
import Auth from './pages/auth/Auth.jsx';
import PrecipitationHistoryData from './components/precipitation-history/PrecipitationHistoryData.jsx';
import Home from './pages/Home/Home.jsx'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Weather from './components/Dashboard/sections/Weather.jsx';
import WaterResourceAnalyzer from './components/Dashboard/sections/WaterResourceAnalyzer.jsx';
import CropPlanningAssistant from './components/Dashboard/sections/CropPlanningAssistant.jsx';
import Help from './components/Dashboard/sections/Help.jsx';
import Settings from './components/Dashboard/sections/Settings.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FloodForecastData from './components/flood-forecast/FloodForecatData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
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
          {
            path: "precipitation-history/PrecipitationHistory", 
            element: <PrecipitationHistoryData />, 
          },
          {
            path: "sections/Weather", 
            element: <Weather />, 
          },
          {
            path: "flood-forecast/FloodForecast",
            element: <FloodForecastData/>,
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
