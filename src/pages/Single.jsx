import React from 'react';
import Edit from '../img/logo192.png';
import Delete from '../img/logo192.png';
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";


const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://pic4.zhimg.com/v2-cf20eed8c19a9e564452358c85f922e9_r.jpg?source=1940ef5c" alt="" />
                <div className="user">
                    <img src="https://pic4.zhimg.com/v2-cf20eed8c19a9e564452358c85f922e9_r.jpg?source=1940ef5c" alt="" />
                    <div className="info">
                       <span>John</span>
                       <p>Posted 2 days ago</p>    
                    </div>
                    <div className="edit">
                       <Link to={`/write?edit=2`}>
                       <img src={Edit} alt="" />
                       </Link>
                       <img src={Delete} alt="" /> 
                    </div>    
                </div>
                <h1>dalsdjlkasjdkalsjdla</h1>
                <p>
                　　我的妈妈也不例外，她都是这样的。每一次的那些“你上学时要小心啊!别干时间就匆忙。”“你今天的作业完成没啊?”“你今天你学的知识复习了吗?”“你多吃点菜，不要只扒饭不吃菜。”
                </p>我的妈妈也不例外，她都是这样的。每一次的那些“你上学时要小心啊!别干时间就匆忙。”“你今天的作业完成没啊?”“你今天你学的知识复习了吗?”“你多吃点菜，不要只扒饭不吃菜。”我的妈妈也不例外，她都是这样的。每一次的那些“你上学时要小心啊!别干时间就匆忙。”“你今天的作业完成没啊?”“你今天你学的知识复习了吗?”“你多吃点菜，不要只扒饭不吃菜。”我的妈妈也不例外，她都是这样的。每一次的那些“你上学时要小心啊!别干时间就匆忙。”“你今天的作业完成没啊?”“你今天你学的知识复习了吗?”“你多吃点菜，不要只扒饭不吃菜。”我的妈妈也不例外，她都是这样的。每一次的那些“你上学时要小心啊!别干时间就匆忙。”“你今天的作业完成没啊?”“你今天你学的知识复习了吗?”“你多吃点菜，不要只扒饭不吃菜。”我的妈妈也不例外，她都是这样的。每一次的那些“你上学时要小心啊!别干时间就匆忙。”“你今天的作业完成没啊?”“你今天你学的知识复习了吗?”“你多吃点菜，不要只扒饭不吃菜。”我的妈妈也不例外，她都是这样的。每一次的那些“你上学时要小心啊!别干时间就匆忙。”“你今天的作业完成没啊?”“你今天你学的知识复习了吗?”“你多吃点菜，不要只扒饭不吃菜。”
                
            </div>
            <Menu/>
        </div>
    );
}

export default Single;
