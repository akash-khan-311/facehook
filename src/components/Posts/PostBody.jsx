const PostBody = ({ poster, content }) => {
  return (
    <div className='border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl'>
      {/* If Post has Image, Render this block */}
      <p>{content ?? 'Now Content Available'}</p>
      <div className='flex items-center justify-center overflow-hidden'>
        {poster && (
          <img
            className='max-w-full'
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
            alt='poster'
          />
        )}
      </div>
    </div>
  )
  {
    /* post body ends */
  }
}
export default PostBody
