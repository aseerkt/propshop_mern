import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

function HomeScreen() {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((pdt) => (
          <Col key={pdt._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={pdt} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;