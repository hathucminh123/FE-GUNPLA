import React, { useEffect } from "react";
import { Container, Form, FormGroup, Input } from "reactstrap";
import { Col, Row } from 'antd';

import { useParams } from "react-router-dom";
import blogData from "../../assets/data/blogData";
// import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../../assets/images/minhwap.jpg";
import { AiOutlineHome, AiOutlineUser ,AiFillCalendar} from 'react-icons/ai';
import { RiAccountCircleLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaReply } from "react-icons/fa";
// import { AiOutlineHome, AiOutlineUser } from 'react-icons/remix';

import "../BlogDetails/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <>
      <section style={{ width: '100%', background: '#efefef', height: '100%' }}>
        <Container style={{ width: '2000px', margin: '0 auto', height: '100%' }}>
          <Row  style={{ flexWrap: 'nowrap', paddingTop: '10px',height: 'calc(100% - 20px)' }} >
            <Col span={18} style={{background:'#fff',marginRight:'10px',padding:'10px',borderRadius:'4px',height:'fit-content',marginTop:'20px',width:'200px'}}>
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" style={{width:'100%',alignItems:'center',textAlign:'center',justifyContent:'center'}} />
                <h2 style={{marginTop:'4rem',textAlign:'center'}} className="section__title mt-4">{blog.title}</h2>
                 <h1>Thời gian tổ chức sự kiện</h1>
                <div style={{display:'flex',alignItems:'center',gap:'4rem',marginBottom:'4rem'}} className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                  <RiAccountCircleLine /> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                  {/* <i class="ri-calendar-fill"></i>{blog.date} */}
                  <AiFillCalendar />{blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                  <IoTimeOutline /> {blog.time}
            
                  </span>
                </div>


                <h6 className="ps-5 fw-normal" style={{paddingLeft:'1.25rem',fontWeight:'normal',textAlign:'center'}}>
                  <blockquote className="fs-4" style={{fontSize:'4rem'}}>{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5" style={{marginTop:'5rem'}}>
                <h4 className="mb-5">3 Bình Luận</h4>

                <div className="single__comment d-flex gap-3" style={{display:'flex',gap:'0.75rem'}}>
                  <img src={commentImg} alt=""  style={{}}/>
                  <div className="comment__content">
                    <h6 className=" fw-bold">Tâm Nguyễn</h6>
                    <p className="section__description mb-0" style={{marginBottom:'0'}}>ngày 23/1/2023</p>
                    <p className="section__description">
                      quả là một sự kiện tuyệt vời
                    </p>

                    <span className="replay d-flex align-items-center gap-1" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                      {/* <i className="ri-reply-line"></i> Replay */}
                      <FaReply /> Replay
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5" style={{marginTop:'5rem'}}>
                  <h4>Để lại bình luận</h4>
                  <p className="section__description">
                    bạn phải đăng nhập để có thể bình luận
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3" style={{display:'flex',gap:'0.75rem'}}>
                      <Input type="text" placeholder="Họ và Tên" />
                      <Input type="email" placeholder="Email của bạn" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        style={{width:'100%',paddingTop:'0.5rem',paddingBottom:'0.5rem',paddingLeft:'1rem',paddingRight:'1rem'}}
                        placeholder="Bình luận..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3" style={{marginTop:'3rem'}}>
                      Đăng phần bình luận
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col span={6} style={{display: 'flex', flexDirection: 'column'}}>
              <div className="recent__post mb-4" style={{marginBottom:'4rem'}}>
                <h5 className=" fw-bold " style={{textAlign:'center',fontSize:'5rem',fontWeight:'bold'}}> Bài viết gần đây</h5>
              </div>
              {blogData.map((item) => (
                <div style={{marginBottom:'4rem'}} className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3" style={{display:'flex',gap:'3rem',textDecoration:'none',color:'#000d6b',fontWeight:'600'}}>
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" style={{width:'25%',borderRadius:'0.25rem'}} />
                    <h6 style={{fontSize:'4rem'}}>
                      <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
