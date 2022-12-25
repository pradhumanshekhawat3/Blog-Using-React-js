import './post.css'
import {Link} from 'react-router-dom'

export default function post({post}) {
  return (
    <div className='post'>
      {post.photo && (
        <img 
        src={post.photo} 
        alt=""
         className="postimg" />
      )}
        

        <div className="postinfo">
            <div className="postcat">
               {post.categories.map((c)=>(
                <span className="postcat">{c.name}</span>
               ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
            <span className="posttitle">{post.title}</span>
            </Link>
            

            <hr />
          {console.log(post)}
            <span className="postdate">
              {post.createdAt.slice(0,10)}</span>
        </div>
        <p className="postdesc">{post.desc}</p>
    </div>
  )
}
