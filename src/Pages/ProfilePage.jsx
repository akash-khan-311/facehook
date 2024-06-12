import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useAxios from '../hooks/useAxios'
import useProfile from '../hooks/useProfile'
import { actions } from '../actions'
import ProfileInfo from '../components/Profile/ProfileInfo'
import MyPost from '../components/Profile/MyPost'

const ProfilePage = () => {
  const { auth } = useAuth()
  const { api } = useAxios()
  const { state, dispatch } = useProfile()

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETHING })
    const fetchProfile = async () => {
      try {
          const response = await api.get(
              `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
                  auth?.user?.id
              }`
          );
          if (response.status === 200) {
              dispatch({
                  type: actions.profile.DATA_FETCHED,
                  data: response.data,
              });
          }
      } catch (error) {
          console.error(error);
          dispatch({
              type: actions.profile.DATA_FETCH_ERROR,
              error: err.message,
          });
      }
  };
    fetchProfile()
  }, [])
  if (state?.loading) return <div>Fetching Profile Data......</div>
  return (
    <>
      <ProfileInfo />
      <MyPost />
    </>
  )
}
export default ProfilePage
