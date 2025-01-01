import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import HomePage from './pages/HomePage.jsx'
import './index.css';
// import SingingPage from './pages/SinginPage.jsx';
import SingupPage from './pages/SingupPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingupPage/>
  </StrictMode>,
)
