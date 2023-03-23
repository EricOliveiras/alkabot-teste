import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { postsService } from "../../service/posts"

import './style.css'

const PostComments = () => {
  const [ comments, setComments ] = useState()
  const [ post, setPost ] = useState()

  const { id } = useParams()

  const getPost = async () => {
    let result = await postsService.read(id)
    setPost(result)
  }

  const getComments = async () => {
    let result = await postsService.readComments(id)
    setComments(result)
  }

  useEffect(() => {
    getPost()
    getComments()
  }, [])

  return (
    <div className="container">
      <p><a href="/">voltar</a></p>
      {!post ? (
        <p>Post não encontrado!</p>
      ) : (
        <>
          <div className="posts" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-p">{post.body}</p>
          </div>
          <h2>Comentários: </h2>
          {!comments ? (
            <p>Ainda não há comentários!</p>
          ) : (
            comments.map(comment => {
              return (
                <div className="container-comment">
                  <div className="comment" key={comment.id}>
                    <h3 className="comment-title">{comment.name}</h3>
                    <p className="comment-p">{comment.body}</p>
                  </div>
                </div>
              )
            })
          )}
        </>
      )}
    </div>
  )
}

export default PostComments