import React from 'react'
import { Container } from 'reactstrap'
import {Row ,Col} from 'antd'


import {motion } from 'framer-motion'

import '../Services/Service.css'
import { AiFillBuild , AiFillDelete} from "react-icons/ai";

import serviceData from "../../assets/data/serviceData"
const Services = () => {


  return <section className="services">
    <Container >
        <Row style={{display:'flex'}}>

            {

                serviceData.map((item,index)=>(
          
                  <Col span={6} key={index} >
                    <motion.div whileHover={{scale: 1.1}} className="service__item" style={{background: `${item.bg}`}}>

                        <span style={{fontSize:'50px'}}>{item.icon}</span>
                        <div style={{marginLeft:'10px'}}>
                            <h1 style={{marginRight:'10px'}}>{item.title}</h1>
                            <p style={{fontSize:'1.5rem'}}>{item.subtitle} </p>
                        </div>
                    </motion.div>
                    
                  
                  
                  </Col>
                  ))
                }


        </Row>
    </Container>
  </section>
}

export default Services