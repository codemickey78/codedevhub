import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
const NewsCard = ({ postinfo }: any) => {
  return (
    <Card className="main-card">
      <Card.Img
        variant="top"
        className="mc-img"
        src={postinfo?.coverPhoto.url}
      />
      <Card.Body>
        <div className="d-flex justify-content-between mb-2 align-item-center">
          <Badge pill className="bgGold text-dark">
            {postinfo?.catergory}
          </Badge>
          <Badge pill className="mc-date">
          {postinfo?.date_published}
          </Badge>
        </div>
        <Card.Title className="mc-title">{postinfo?.title}</Card.Title>
        <Card.Text className="text-break-2">{postinfo?.brief}</Card.Text>
        <Link
        state={{data: postinfo}}
          to={`/post-details/${postinfo.slug}`}
          className="bgBlue text-white btn mc-read"
        >
          Read more
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
