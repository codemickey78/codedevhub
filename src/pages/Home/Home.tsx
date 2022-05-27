import React, { useState } from "react";
import Header from "../../layouts/Header/Header";
import Masonry from "react-masonry-css";
import { Container, Nav } from "react-bootstrap";
import NewsCard from "../../components/Card";
import "../pages.scss";
import { allPosts } from "../../data/dummyPosts";
import { PostType } from "../../interfaces/Post";
import bgImg from "../../assets/img/bgImg.png";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const categories = [
    { name: "React", category: "react" },
    { name: "Angular", category: "angular" },
    { name: "Ionic", category: "ionic" },
    { name: "Node.js", category: "node" },
    { name: "Firebase", category: "firebase" },
  ];
  const handleSelect = (eventKey: any) => {
    console.log(categories[eventKey].category);
    
    setActiveTab(eventKey);
  };

  const allDummyposts: PostType[] = allPosts;
  return (
    <>
      <Header />
      <img src={bgImg} alt="bgImg" className="bgImg"/>
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
                <Nav.Item key={i}>
                  <Nav.Link className="bgBlue-text" eventKey={i}>
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
          {allDummyposts.map((post, i) => (
            <NewsCard postinfo={post} key={i} />
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default Home;
