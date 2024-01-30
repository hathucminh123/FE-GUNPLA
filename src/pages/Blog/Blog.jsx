import React from "react";
import { Container, Row } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import BlogList from "../../components/BlogList/BlogList";

const Blog = () => {
  return (
    // <Helmet title="Blogs">
    <div style={{textAlign:'center',justifyContent:'center',justifyItems:'center'}}>
      <CommonSection title="Tin tức" />
      <section style={{textAlign:'center',justifyItems:'center',justifyContent:'center'}}>
        <Container style={{justifyContent:'center'}}>
          <Row style={{justifyContent:'center'}}>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    {/* // </Helmet> */}

</div>
  );
};

export default Blog;
