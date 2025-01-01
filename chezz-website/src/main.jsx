import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import './index.css';
// import SingingPage from './pages/SinginPage.jsx';
import SingupPage from './pages/SingupPage.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/singup" element={<SingupPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
