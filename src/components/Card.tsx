import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
const NewsCard = ({ postinfo }: any) => {
  return (
    <Card className="main-card">
      <Card.Img variant="top" src={postinfo?.coverPhoto} />
      <Card.Body>
        <div className="d-flex justify-content-between mb-2 align-item-center">
          <Badge pill className="bgGold text-dark">
            React
          </Badge>
          <Badge pill className="mc-date">
            May 28,2022
          </Badge>
        </div>
        <Card.Title className="mc-title">{postinfo?.title}</Card.Title>
        <Card.Text className="text-break-2">{postinfo?.content}</Card.Text>
        <Button className="bgBlue mc-read">Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
