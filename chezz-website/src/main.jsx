import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import './index.css';
import SinginPage from './pages/SinginPage.jsx';
import SingupPage from './pages/SingupPage.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RefinePasswordPage from './pages/RefinePasswordPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/singup" element={<SingupPage/>}/>
        <Route path="/singin" element={<SinginPage/>}/>
        <Route path="/refine" element={<RefinePasswordPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
