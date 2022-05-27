import React, { useState, useEffect } from "react";
import Header from "../../layouts/Header/Header";
import Masonry from "react-masonry-css";
import { Container, Nav } from "react-bootstrap";
import NewsCard from "../../components/Card";
import "../pages.scss";
import { categories } from "../../data/dummyPosts";
import { PostType } from "../../interfaces/Post";
import bgImg from "../../assets/img/bgImg.png";
import getPost from '../../api/getPost';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [gotallPost, setGotAllPost] = useState([])
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const handleSelect = (eventKey: any) => {
    console.log(categories[eventKey].category);

    setActiveTab(eventKey);
  };

  useEffect(() => {
    getPost().then((res) => {
      // setGotAllPost((res).concat(allDummyposts));
      setGotAllPost(res);
      console.log(res);
      
    })
  }, [])
  

  // const allDummyposts: PostType[] = allPosts;
  return (
    <>
      <Header />
      <img src={bgImg} alt="bgImg" className="bgImg" />
      <Container className="main-container">
        <div className="bgCoverImg">
          <div className="main-categories">
            <Nav
              fill
              variant="pills"
              activeKey={activeTab}
              onSelect={handleSelect}
              defaultActiveKey={activeTab}
            >
              {categories.map((category, i): any => (
                <Nav.Item key={i} className="mx-2">
                  <Nav.Link className="mc-cate-link bgBlue-text" eventKey={i}>
                    <category.icon /> &nbsp;
                    {category?.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {gotallPost.map((post, i) => (
            <NewsCard postinfo={post} key={i} />
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default Home;
