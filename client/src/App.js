import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import WritePage from './pages/Write'

function App() {
  return (
    <div style={{'backgroundColor': 'aqua'}}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/write" element={<WritePage/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
