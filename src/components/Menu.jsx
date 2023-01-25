import React from 'react'

const Menu = () => {
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
        <div className="menu">
            <h1>您可能喜欢的其他帖子</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>阅读更多</button>
                </div>
            ))}
        </div>
  )
}

export default Menu