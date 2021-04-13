import React from 'react';
import Card from 'react-bootstrap/Card'
const Frase = () => {
    return (
        
            <Card className="w-100">
  <Card.Body>
      <div className="row">
          <div className="col-sm-12 col-md-4">
              <img src="" alt=""/>
          </div>
          <div classname="col-sm-12 col-md-8"></div>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
      Frase aleatoria del personaje 
    </Card.Text>
      </div>
    
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
       
    );
};

export default Frase;