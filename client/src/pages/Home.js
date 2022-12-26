import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import NavBar from '../NavBar'

export default function HomePage(){
    return(
        <div>
            <h1 className='d-flex justify-content-center'>Blog site</h1>
            <NavBar/>
            <WrittenBlogs/>
        </div>
    )
}

const WrittenBlogs = () => {
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

    // Delete a blog post
    const deletePost = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/post/${id}`)
            const newListPosts = listPosts.filter(post => post._id !== id)
            setListPosts(newListPosts)
        } catch (error) {
            console.log(error)
        }
    }  

    
    return(
        <div>
            {
                listPosts.map(post => (
                    <div>
                    <div className='d-flex justify-content-center'>
                        <h5>{post.title}</h5>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <p>{post.text}</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                        <Button>Update</Button>
                        &nbsp;
                        <Button onClick={()=>{deletePost(post._id)}}>Delete</Button>
                        </div>
                        </div>
                    
                ))
            }
        </div>
    )
}  