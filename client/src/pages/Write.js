import { Button } from 'react-bootstrap'
import NavBar from '../NavBar'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function WritePage(){
    return(
        <div>
            <h1 className='d-flex justify-content-center'>Write a new blog</h1>
            <NavBar/>
            <Form/>
        </div>
    )
}

const Form = () => {
    const [headerPartText, setHeaderPartText] = useState('')
    const [textPartText, setTextPartText] = useState('')
    const [listPosts, setListPosts] = useState([])

        // Fetch all blog posts from database
        useEffect(() =>{
            const getPostsList = async () => {
                try {
                    const res = await axios.get('http://localhost:5000/api/posts')
                    setListPosts(res.data)
                } catch (error) {
                    console.log(error)
                }
            }
            getPostsList()
        }, [])
    
    // Add a blog post
    const addPost = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/post', {title: headerPartText, text: textPartText})
            setListPosts(prev => [...prev, res.data])
            setHeaderPartText('')
            setTextPartText('')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='d-flex justify-content-center' style={{"marginTop": "20px"}}>
        <form>
          <div className='d-flex justify-content-start'>
          <input type="text" placeholder="Add header" size="50" onChange={e => {setHeaderPartText(e.target.value)}} value={headerPartText}/>
          </div>
          <br/>
          <div className='d-flex justify-content-center'>
          <textarea rows="20" cols="100" placeholder="Write text" onChange={e => {setTextPartText(e.target.value)}} value={textPartText}/>  
          </div>
          <br/>
          <div className='d-flex justify-content-end'>
          <Button className='btn btn-success' onClick={e => addPost(e)}>Publish</Button>
          </div>
        </form>
        </div>
    )
}

