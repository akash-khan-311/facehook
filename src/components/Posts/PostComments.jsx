import { useState } from 'react'
import useAvatar from '../../hooks/useAvatar'
import PostCommentList from './PostCommentList'

const PostComments = ({ post }) => {
  const { avatarURL } = useAvatar(post)
  const [showComments, setShowComments] = useState(false)
  return (
    <div>
      <div className='flex-center mb-3 gap-2 lg:gap-4'>
        <img
          className='w-7 h-7 rounded-full lg:h-[34px] lg:w-[34px]'
          src={avatarURL}
          alt='avatar'
        />
        <div className='flex-1'>
          <input
            type='text'
            className='h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]'
            name='post'
            id='post'
            placeholder="What's on your mind?"
          />
        </div>
      </div>
      {/* comment filter button */}
      <div onClick={() => setShowComments(!showComments)} className='mt-4'>
        <button className='text-gray-300 max-md:text-sm'>All Comment ▾</button>
      </div>

      {showComments && <PostCommentList comments={post?.comments} />}
    </div>
  )
}
export default PostComments
