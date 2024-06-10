import ThreeDotsIcon from '../../assets/icons/3dots.svg'
import EditIcon from '../../assets/icons/edit.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import TimeIcon from '../../assets/icons/time.svg'
import { getDateDifferenceFromNow } from './../../utils/index'
import useAvatar from '../../hooks/useAvatar'
import { useState } from 'react'

const PostHeader = ({ post }) => {
  const { avatarURL } = useAvatar(post)
  const [showAction, setShowAction] = useState(false)
  return (
    <header className='flex items-center justify-between gap-4'>
      {/* author info */}
      <div className='flex items-center gap-3'>
        <img
          className=' rounded-full w-10 h-10 lg:h-[58px] lg:w-[58px]'
          src={avatarURL}
          alt='avatar'
        />
        <div>
          <h6 className='text-lg lg:text-xl'>{post?.author?.name}</h6>
          <div className='flex items-center gap-1.5'>
            <img src={TimeIcon} alt='time' />
            <span className='text-sm text-gray-400 lg:text-base'>
              {`${getDateDifferenceFromNow(post.createAt)}`}
            </span>
          </div>
        </div>
      </div>
      {/* author info ends */}
      {/* action dot */}
      <div className='relative'>
        <button onClick={() => setShowAction(!showAction)}>
          <img src={ThreeDotsIcon} alt='3dots of Action' />
        </button>
        {/* Action Menus Popup */}
        {showAction && (
          <div className='action-modal-container'>
            <button className='action-menu-item hover:text-lwsGreen'>
              <img src={EditIcon} alt='Edit' />
              Edit
            </button>
            <button className='action-menu-item hover:text-red-500'>
              <img src={DeleteIcon} alt='Delete' />
              Delete
            </button>
          </div>
        )}
      </div>
      {/* action dot ends */}
    </header>
  )
}
export default PostHeader
