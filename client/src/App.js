import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Write from './pages/Write'

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/write" element={<Write/>}/>
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
