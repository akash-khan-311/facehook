import useProfile from '../../hooks/useProfile'
import EditIcon from '../../assets/icons/edit.svg'
import CheckIcon from '../../assets/icons/check.svg'
import { useState } from 'react'
import { actions } from './../../actions/index'
import { api } from './../../api/index';

const Bio = () => {
  const { state, dispatch } = useProfile()
  const [bio, setBio] = useState(state?.user?.bio)
  const [editMode, setEditMode] = useState(false)

  const handleBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETHING })

    try {
      const responose = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      )

      if (responose.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: responose.data
        })
      }
      setEditMode(false)
    } catch (error) {
      console.log(error)
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message
      })
    }
  }
  return (
    <div className='mt-4 flex items-start gap-2 lg:mt-6'>
      <div className='flex-1'>
        {!editMode ? (
          <p className='leading-[188%] text-gray-400 lg:text-lg'>
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            className='p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md'
            name=''
            id=''
            value={bio}
            rows={4}
            cols={55}
            onChange={e => setBio(e.target.value)}
          />
        )}
      </div>
      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className='flex-center h-7 w-7 rounded-full'
        >
          <img src={EditIcon} alt='Edit' />
        </button>
      ) : (
        <button
          onClick={handleBioEdit}
          className='flex-center h-7 w-7 rounded-full'
        >
          <img src={CheckIcon} alt='Checked' />
        </button>
      )}
      {/* Edit Bio button. The Above bio will be editable when clicking on the button */}
    </div>
  )
}
export default Bio
