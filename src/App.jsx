import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notification from './pages/Notification';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Notification />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
