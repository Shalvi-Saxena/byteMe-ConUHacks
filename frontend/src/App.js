import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import store from './store';
import { Provider } from 'react-redux';
import UploadForm from './components/UploadForm';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from './components/Settings';
import History from './components/History';
import Login from './components/Login';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-expense" element={<UploadForm />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Provider>
  );
}

export default App;
