import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import useToken from './hooks/useToken';
import Navbar from './components/navbar';
import { useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';
import { RootState } from './type'

function App() {
  const { token } = useToken()
  console.log(token)

  const { modal } = useSelector((state: RootState) => state.modal);






  return (
    <Router>
      {token && <Navbar />
      }

     { modal && <Modal />}
      <Routes>
        <Route path="/" element={!token ? <Link to={'/auth'} /> : <Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
