import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import '../App.css'

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
    const [isUpdating, setIsUpdating] = useState('')
    const [updatePostHeaderPart, setUpdatePostHeaderPart] = useState('')
    const [updatePostTextPart, setUpdatePostTextPart] = useState('')

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

    // Update a blog post
    const updatePost = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:5000/api/post/${isUpdating}`, {title: updatePostHeaderPart, text: updatePostTextPart})
            
            console.log(res.data)
            const updatedPostIndex = listPosts.findIndex(post => post._id === isUpdating)
            const updatedPostHeaderPart = listPosts[updatedPostIndex].title = updatePostHeaderPart
            const updatedPostTextPart = listPosts[updatedPostIndex].text = updatePostTextPart
            setUpdatePostHeaderPart('')
            setUpdatePostTextPart('')
            setIsUpdating('')
        } catch (error) {
            console.log(error)
        }
    }
    
    // Form for updating selected blog post
    const renderUpdateForm = () => (
        <div style={{"marginTop": "20px", "marginBottom": "20px"}}>
            <form>
            <div className='d-flex justify-content-center'>
                <input type="text" placeholder="Modify header" size="50" onChange={e => {setUpdatePostHeaderPart(e.target.value)}} value={updatePostHeaderPart}/>
            </div>
            &nbsp;
            <div className='d-flex justify-content-center'>
                <textarea rows="20" cols="100" placeholder="Modify text" onChange={e => {setUpdatePostTextPart(e.target.value)}} value={updatePostTextPart}/>  
            </div>
            &nbsp;
            <div className='d-flex justify-content-center'>
            <Button onClick={(e) => {updatePost(e)}}>Update</Button>
            </div>
            </form>
        </div>
    )
    
    return(
        <div>
            {
                listPosts.map(post => (
                    <div>
                        {
                            isUpdating === post._id
                            ? renderUpdateForm()
                            : <div>
                                <div className='d-flex justify-content-center'>
                                    <h5>{post.title}</h5>
                                </div>
                                <div className='d-flex justify-content-center' style={{'marginBottom': '1%'}}>
                                    <div className='multiline'>{post.text}</div>
                                </div>
                                <div className='d-flex justify-content-center' style={{'marginBottom': '3%'}}>
                                    <Button className="btn btn-warning" onClick={() => {setIsUpdating(post._id)}}>Update</Button>
                                    &nbsp;
                                    <Button className="btn btn-danger" onClick={() => {deletePost(post._id)}}>Delete</Button>
                                </div>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}  