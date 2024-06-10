import PostCard from './PostCard'

const PostsList = ({ posts }) => {
  return !!posts && posts.map(post => <PostCard post={post} key={post.id} />)
}
export default PostsList
