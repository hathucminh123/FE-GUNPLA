// Import React, Col, and other necessary components/modules
import React from "react";
import { Col, Row } from "reactstrap";
import "../BlogList/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";
import { AiOutlineHome, AiOutlineUser ,AiFillCalendar} from 'react-icons/ai';
import { RiAccountCircleLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaReply } from "react-icons/fa";

const BlogList = () => {
  return (
    <Row  style={{display:'flex' ,width:'1270px',justifyContent:'center',justifyItems:'center',textAlign:'center'}}>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </Row>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5" style={{display:'flex'}}>
      
      <div className="blog__item" >
        <img style={{width:'100%',height:'400px'}} src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3" style={{ padding: '3px' }}>
          <Link to={`/blogs/${title}`} className="blog__title" style={{fontSize:'2rem'}}>
            {title}
          </Link>
          <p className="section__description mt-3" style={{marginTop:'2rem'}}>
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read__more"  style={{fontSize:'2rem'}}>
            xem thêm chi tiết
          </Link>

         

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between"style={{paddingTop:'1rem',marginTop:'2rem',alignItems:'center',justifyContent:'space-between'}}>
            <span className="blog__author" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
            <RiAccountCircleLine />{author}
            </span>

            <div className="d-flex align-items-center gap-3" style={{display:'flex',alignItems:'center',gap:'3rem'}}>
              <span className="d-flex align-items-center gap-1 section__description" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
              <AiFillCalendar /> {date}
              </span>

              <span className="d-flex align-items-center gap-1 section__description" style={{display:'flex',alignItems:'center',gap:'1rem'}}>
              <IoTimeOutline />{time}
              </span>
            </div>
          </div>
        </div>
      </div>

    </Col>
  );
};

export default BlogList;
