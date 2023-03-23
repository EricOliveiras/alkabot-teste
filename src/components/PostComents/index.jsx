import { useEffect, useState } from "react"
import { postsService } from "../../service/posts"

const PostComents = () => {
  const [ coments, setComents ] = useState()

  const getComents = async (id) => {
    let result = await postsService.readComents(id)
    console.log(result)
  }

  useEffect(() => {
    getComents()
  }, [])
}