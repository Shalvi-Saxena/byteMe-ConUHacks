import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from './components/Home';
import { UploadForm } from './components/UploadForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<UploadForm />} />
    </Routes>
  );
}

export default App;
