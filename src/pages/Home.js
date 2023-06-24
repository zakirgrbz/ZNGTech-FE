import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


function Home() {
  return (
    <div className='container Home1 Bgg'>
        <>
      <div className='main1 col-12  row justify-content-center'>
        <div className='col-10 row mt-5'>
        <Container>
        <Row>
          <Col sm={12} lg={6}>
            <h1 className="display-1">We Buy Your Laptop Now.</h1>
            <h5 className=" text-dark">
            Get a quote from us for your working or defective laptops...
            </h5>
            <div className="container mt-5 col-4 d-grid ">
              <Button variant="danger" width="md" size="lg" as={Link} to="/Sellnow">
               Sell Now
              </Button>
              {/* <Button variant="danger" size="lg" as={Link} to="/posts">
                What I sold
              </Button> */}
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <img width="100%" src="images/laptop3.png" alt="logo"
                          
            />
          </Col>
        </Row>
      </Container>

        </div>
      

      </div>
           
    </>
      
    </div>  
  )
}
export default Home