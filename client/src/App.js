import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Feed from './pages/feed/Feed'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Feed/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
