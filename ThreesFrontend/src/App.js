import Broumvirate from './pages/Broumvirate';
import Navbar from './components/Navbar';
import NewThree from './pages/NewThree';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Broumvirate />} />
          <Route path="new" element={<NewThree />} />
        </Route>
      </Routes>
    </Router>
  );
}
