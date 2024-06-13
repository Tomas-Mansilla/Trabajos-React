import React from "react";
import "./ItemListContainerComponent.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainerComponent = ({ products }) => {
  return products.map((products) => 
    return
    <Card key={products.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.thumbnail} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
          {products.description}
        </Card.Text>
        <link to={`/item/${product.id}`}>mas informacion</link>
      </Card.Body>
    </Card>
    
  )
};

export default ItemListContainerComponent;