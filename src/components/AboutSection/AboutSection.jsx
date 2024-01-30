import React from "react";
import { Container } from "reactstrap";
import { Row,Col } from "antd";
import "../AboutSection/about-section.css";
import aboutImg from "../../assets/images/minh8.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "100px" }
      }
    >
      <Container>
        <Row>
          <Col span={12}>
            <div className="about__section-content">
              <h4 className="section__subtitle" style={{fontSize:'3rem',color:'#f9a826'}}>Thông tin về chúng tôi</h4>
              <h2 className="section__title">Chào Mừng đến Rainbow Bandits</h2>
              <p className="section__description">
              Chào mừng bạn đến với Rainbow Bandits- Nơi tuyệt vời nhất để trải nghiệm và mua sắm các mô hình Gunpla chất lượng cao! Chúng tôi tự hào là cộng đồng đam mê Gundam và Gunpla, mang đến cho bạn một không gian trực tuyến đặc biệt, nơi bạn có thể khám phá và sở hữu những tác phẩm nghệ thuật tinh tế và độc đáo từ thế giới Gunpla. <br/>

Tại Gunpla Haven, chúng tôi cam kết cung cấp cho bạn sự đa dạng về sản phẩm, từ các mô hình Gunpla cơ bản cho người mới bắt đầu đến những bộ mô hình chất lượng cao dành cho những người mô hình thủ công và người hâm mộ nâng cao. Với kho hàng đa dạng và liên tục cập nhật theo xu hướng mới nhất, chúng tôi đảm bảo rằng bạn sẽ luôn tìm thấy điều gì đó phù hợp với sở thích và sự sáng tạo của mình.<br/>

Chất lượng là ưu tiên hàng đầu của chúng tôi. Tất cả các sản phẩm Gunpla được cung cấp tại Gunpla Haven đều được chọn lọc cẩn thận từ các nhà sản xuất uy tín, đảm bảo rằng bạn nhận được một sản phẩm chất lượng và đúng với mong đợi của mình.

Chúng tôi không chỉ là một trang web bán hàng, mà còn là một cộng đồng yêu thích Gunpla. Gunpla Haven cung cấp không chỉ sản phẩm, mà còn là thông tin, hướng dẫn xây dựng, và sân chơi cho cộng đồng Gunpla để chia sẻ và tạo ra những tác phẩm độc đáo của riêng mình.

Hãy cùng chúng tôi khám phá thế giới Gunpla tại Gunpla Haven. Chúng tôi hy vọng rằng bạn sẽ tìm thấy niềm vui và sự hài lòng khi thực hiện những dự án Gunpla của mình, và chúng tôi luôn sẵn lòng hỗ trợ bạn trong hành trình sáng tạo của mình.
              </p>

              
            </div>
          </Col>

          <Col span={12}>
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" style={{width:'100%'}} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
