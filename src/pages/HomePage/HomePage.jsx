import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/minh1.jpg'
import slider2 from '../../assets/images/minh2.jpg'
import slider3 from '../../assets/images/minh3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'
import Services from '../../components/Services/Services';
import { Row, Col } from "antd";
import { Container } from 'reactstrap'
import { useEffect } from 'react'

import BlogList from "../../components/BlogList/BlogList";
import AboutSection from '../../components/AboutSection/AboutSection'
import Testimonial from '../../components/Testimonial/Testimonial'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 500)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6)
  const [typeProducts, setTypeProducts] = useState([])
  
  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res

  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }

  const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])

  return (
    <Loading isLoading={isLoading || loading}>
    
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
        <div id="container" style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          {/* <Services/> */}
         
          <AboutSection />
          <Container>
          <Row>
            <Col span={24} style={{marginTop:'3rem'}}>
            <h6 className="section__subtitle" style={{color:'#f9a826',fontWeight:'600',fontSize:'3rem',textAlign:'center'}}>Thông tin </h6>
              <h2 className="section__title" style={{textAlign:'center'}}>Những lợi ích khi mua hàng của  Rainbow Bandits  </h2>
            </Col>
         
            </Row>
            </Container>
            <Services/>
          <Row>
            <Col span={24}>
            <h6 className="section__subtitle" style={{color:'#f9a826',fontWeight:'600',fontSize:'3rem',textAlign:'center'}}>Khám phá  </h6>
              <h2 className="section__title" style={{textAlign:'center'}}>Các sản phẩm mới nhất  </h2>
            </Col>
            </Row>
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                  id={product._id}
                />
              )
            })}
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textbutton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                width: '240px', height: '38px', borderRadius: '4px'
              }}
              disabled={products?.total === products?.data?.length || products?.totalPage === 1}
              styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
              onClick={() => setLimit((prev) => prev + 6)}
            />
          </div>
          <section>
      
        <Container >
          <Row style={{width:'100%'}}>
            <Col span={24} style={{marginTop:'20px'}}>
              <h6 className="section__subtitle" style={{color:'#f9a826',fontWeight:'600',fontSize:'3rem',textAlign:'center'}}>Khách hàng nói gì về Rainbow Bandits </h6>
              <h2 className="section__title" style={{textAlign:'center',justifyContent:'cener'}}>Lời bình luận </h2>
            </Col>

          </Row>
        </Container>
        
        <Testimonial />
      </section>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <section  style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Container >
          <Row style={{width:'100%'}}>
            <Col span='24'>
              <h6 className="section__subtitle" style={{color:'#f9a826',fontWeight:'600',fontSize:'3rem',textAlign:'center'}}>Khám phá News với chúng tôi </h6>
              <h2 className="section__title" style={{textAlign:'center'}}>Các tin mới nhất </h2>
            </Col>
       
            < BlogList  />

            <i class="ri-account-circle-fill"></i>
       
          </Row>
          </Container>
          </section>
          </div>
        </div>
      </div>
    
    </Loading>
  )
}

export default HomePage 