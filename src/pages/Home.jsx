import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  const posts = [
    {
      id:1,
      title:"this is id 1",
      desc:"this is id 1",
      img:"https://pic4.zhimg.com/v2-cf20eed8c19a9e564452358c85f922e9_r.jpg?source=1940ef5c"
    },
    {
      id:2,
      title:"this is id 2",
      desc:"this is id 2",
      img:"https://pic4.zhimg.com/v2-cf20eed8c19a9e564452358c85f922e9_r.jpg?source=1940ef5c"

    },
    {
      id:3,
      title:"this is id 3",
      desc:"this is id 3",
      img:"https://pic4.zhimg.com/v2-cf20eed8c19a9e564452358c85f922e9_r.jpg?source=1940ef5c"

    },
    {
      id:4,
      title:"this is id 4",
      desc:"this is id 4",
      img:"https://pic4.zhimg.com/v2-cf20eed8c19a9e564452358c85f922e9_r.jpg?source=1940ef5c"

    }
  ];
  return (
    <div className="home">
      <div className="posts"> {
          // 如果返回的是JSX类型的那箭头函数就不用写大括号，写个小括号就行
          posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              {/* 反向单引号用于字符串插值 */}
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home