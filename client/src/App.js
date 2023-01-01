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

/*    <div className='d-flex justify-content-start'>abc</div>
      <div className='d-flex justify-content-end'>abc</div>
      <div className='d-flex justify-content-center'>abc</div>
      <div className='d-flex justify-content-between'>abc</div>
      <div className='d-flex justify-content-around'>abc</div>
      <div className='d-flex justify-content-evenly'>abc</div> */

export default App;
