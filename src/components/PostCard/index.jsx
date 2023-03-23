import { useEffect, useState } from "react"
import { postsService } from "../../service/posts"

import './style.css'

const PostCard = () => {
  const [ posts, setPosts ] = useState()

  const getPosts = async () => {
    let result = await postsService.read()
    setPosts(result)
  }
  
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="container">
      <h1>Posts:</h1>
      {!posts ? (
        <p>Não existe posts ainda</p>
      ): (
        posts.map(post => {
          return (
            <div className="posts" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-p">{post.body}</p>
              <a className="post-link" href="#">ver comentários</a>
            </div>
          )
        })
      )}
    </div>
  )
}

export default PostCard