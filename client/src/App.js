import {Button, Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header/>
      <Formi/>
      </div>
  );
}

const Header = () => {
  return(
    <h1 className='d-flex justify-content-center'>My blog</h1>
  )
}

const Formi = () => {
  return(
      <form className='d-flex justify-content-center'>
        <input type='text' placeholder='Add header'/>
        <input type='text' placeholder='Write text'/>  
      </form>
  )
}

/*    <div className='d-flex justify-content-start'>abc</div>
      <div className='d-flex justify-content-end'>abc</div>
      <div className='d-flex justify-content-center'>abc</div>
      <div className='d-flex justify-content-between'>abc</div>
      <div className='d-flex justify-content-around'>abc</div>
      <div className='d-flex justify-content-evenly'>abc</div> */

export default App;
