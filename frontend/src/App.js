import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from './components/Home';
import { UploadForm } from './components/UploadForm';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from './components/Settings';
import { History } from './components/History';
import { Login } from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<UploadForm />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/history" element={<History />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
