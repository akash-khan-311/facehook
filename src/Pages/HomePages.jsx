import { Link } from 'react-router-dom'
import Header from '../components/common/Header'

import { useEffect, useReducer } from 'react'
import { initialState, postReducer } from '../reducers/PostReducer'
import useAxios from '../hooks/useAxios'
import PostsList from '../components/Posts/PostsList'
import { actions } from '../actions'

const HomePages = () => {
  const [state, dispatch] = useReducer(postReducer, initialState)
  const { api } = useAxios()
  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING })
    const fetchPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        )
        console.log(response)
        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data
          })
        }
      } catch (error) {
        console.error(error.message)
        dispatch({
          type: actions.post.DATA_FETCH_ERROR,
          error: error.message
        })
      }
    }

    fetchPosts()
  }, [])

  if (state?.loading) return <div>Fetching Posts......</div>
  if (state?.error) return <div>Error Fetch Error {state?.error} </div>
  return (
    <div>
      <PostsList posts={state?.posts} />
    </div>
  )
}
export default HomePages
