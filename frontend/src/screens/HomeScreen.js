import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
// import products from '../products';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
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
