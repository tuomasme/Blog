import NavBar from '../NavBar'

export default function Write(){
    return(
        <div>
            <h1 className='d-flex justify-content-center'>Write a new blog</h1>
            <NavBar/>
            <Form/>
        </div>
    )
}

const Form = () => {
    return(
        <div className='d-flex justify-content-center' style={{"margin-top": "20px"}}>
        <form>
          <input type="text" placeholder="Add header" size="50"/>
          <br/>
          <br/>
          <textarea rows="20" cols="100" placeholder="Write text"/>  
        </form>
        </div>
    )
}

