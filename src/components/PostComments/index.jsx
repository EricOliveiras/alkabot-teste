import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { postsService } from "../../service/posts"
import { usersService } from "../../service/users"

import './style.css'

const PostComments = () => {
  const [ comments, setComments ] = useState()
  const [ post, setPost ] = useState()
  const [ users, setUsers ] = useState()

  const { id } = useParams()

  const getPost = async () => {
    let result = await postsService.read(id)
    setPost(result)
  }

  const getComments = async () => {
    let result = await postsService.readComments(id)
    setComments(result)
  }

  const getUser = async () => {
    let result = await usersService.readAll()
    setUsers(result)
  }

  useEffect(() => {
    getPost()
    getComments()
    getUser()
  }, [])

  return (
    <div className="container">
      <p><a href="javascript:history.back()">voltar</a></p>
      {!post ? (
        <p>Post não encontrado!</p>
      ) : (
        <>
          <div className="posts" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            {!users ? (
              ''
            ) : (
              users.map(user => {
                if (post.userId === user.id) {
                  return (
                    <p className="user-p-link" key={user.id}>Autor: <a href={`/user/${user.id}`}>{user.name}</a></p>
                  )
                }
              })
            )}
            <p className="post-p">{post.body}</p>
          </div>
          <h2>Comentários: </h2>
          {!comments ? (
            <p>Ainda não há comentários!</p>
          ) : (
            comments.map(comment => {
              return (
                <div className="container-comment" key={comment.id}>
                  <div className="comment">
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