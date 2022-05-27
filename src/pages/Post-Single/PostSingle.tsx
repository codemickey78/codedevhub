import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../assets/img/profile.jpeg";
import sampImg from "../../assets/img/image-4.png";
import NewsCard from "../../components/Card";
import { allPosts } from "../../data/dummyPosts";
import { v4 as uuidv4 } from 'uuid';

const PostSingle = () => {
  const [randNumsArr, setRandNumsArr] = useState([3, 5, 7]);

  const generateRandNumArr = () => {
    return Array.from(
      { length: 3 },
      () => Math.floor(Math.random() * (8 - 1 + 1)) + 1
    );
  };

  useEffect(() => {
    setRandNumsArr(generateRandNumArr());
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <div className="post-main">
          <div className="post-header mb-3">
            <h1 className="text-center text-white">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing
            </h1>
            <div className="ph-details d-flex justify-content-center align-items-center mt-3">
              <div className="ph-img ">
                <img src={profileImg} alt="profile" />
              </div>
              <h6 className="m-0">CodeMickey.</h6>
              <span>May 26th, 2022</span>
            </div>
          </div>
          <div className="post-cover mt-4">
            <img src={sampImg} alt="cover" />
          </div>
          <div className="post-desc mt-5">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor
              dolorem natus nam ad nisi asperiores debitis ullam. Eveniet
              cupiditate dicta nostrum iure corporis repellat libero natus nihil
              tenetur dolor. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas quisquam accusamus repellat dicta recusandae ipsam
              pariatur odio alias praesentium explicabo vitae, atque ab neque
              obcaecati ducimus beatae vero laudantium eaque?
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor
              dolorem natus nam ad nisi asperiores debitis ullam. Eveniet
              cupiditate dicta nostrum iure corporis repellat libero natus nihil
              tenetur dolor. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas quisquam accusamus repellat dicta recusandae ipsam
              pariatur odio alias praesentium explicabo vitae, atque ab neque
              obcaecati ducimus beatae vero laudantium eaque?
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor
              dolorem natus nam ad nisi asperiores debitis ullam. Eveniet
              cupiditate dicta nostrum iure corporis repellat libero natus nihil
              tenetur dolor. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas quisquam accusamus repellat dicta recusandae ipsam
              pariatur odio alias praesentium explicabo vitae, atque ab neque
              obcaecati ducimus beatae vero laudantium eaque?
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor
              dolorem natus nam ad nisi asperiores debitis ullam. Eveniet
              cupiditate dicta nostrum iure corporis repellat libero natus nihil
              tenetur dolor. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas quisquam accusamus repellat dicta recusandae ipsam
              pariatur odio alias praesentium explicabo vitae, atque ab neque
              obcaecati ducimus beatae vero laudantium eaque?
            </p>
            <div className="mt-5">
              <h4 className="text-center bgGold-text">More Stories</h4>
              <div className="mt-4">
                <>
                  <Container>
                    <Row>
                      {randNumsArr.map((rand, index) => (
                        <Col lg="4" md="4" sm="12" className="psi-col" key={index}>
                          <NewsCard
                            postinfo={allPosts[rand]}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PostSingle;
