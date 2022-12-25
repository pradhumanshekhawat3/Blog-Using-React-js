import './Posts.css'
import Post from '../post/post'

export default function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.map(p=>(
        <Post post={p}/>
      ))}
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/> */}
    </div>
  )
}
