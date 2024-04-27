import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './i18n';
import { useTranslation } from 'react-i18next';
import GlobalStyle from './utils/GloablStyle';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import i18n from './i18n';

import './global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  const { t, i18n } = useTranslation();

  return (
    <React.StrictMode>
      <GlobalStyle lang={i18n.language} />
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
