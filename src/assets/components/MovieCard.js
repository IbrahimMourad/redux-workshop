import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
    <div className="col-md-4">
      <Card>
        <CardImg alt="Card image cap" src={posterUrl} top />
        <CardBody>
          <CardTitle tag="h5"> {title}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>{rate}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
