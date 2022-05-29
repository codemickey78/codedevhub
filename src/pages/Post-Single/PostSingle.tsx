import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Container } from "react-bootstrap";
// import profileImg from "../../assets/img/profile.jpeg";
// import sampImg from "../../assets/img/image-4.png";
// import NewsCard from "../../components/Card";
// import { allPosts } from "../../data/dummyPosts";
import { useLocation } from 'react-router-dom'

const PostSingle = () => {
  const location = useLocation();
  const { data }: any = location.state;


  // const [randNumsArr, setRandNumsArr] = useState([3, 5, 7]);

  // const generateRandNumArr = () => {
  //   return Array.from(
  //     { length: 3 },
  //     () => Math.floor(Math.random() * (8 - 1 + 1)) + 1
  //   );
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    // setRandNumsArr(generateRandNumArr());
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <div className="post-main">
          <div className="post-header mb-3">
            <h1 className="text-center text-white">
              {data?.title}
            </h1>
            <div className="ph-details d-flex justify-content-center align-items-center mt-3">
              <div className="ph-img ">
                <img src={data?.authors.avatar.url} alt="profile" />
              </div>
              <h6 className="m-0">{data?.authors.name}</h6>
              <span>{data?.date_published}</span>
            </div>
          </div>
          <div className="post-cover mt-4">
            <img src={data?.coverPhoto.url} alt="cover" />
          </div>
          <div className="post-desc mt-5">
            <div className="text-white" dangerouslySetInnerHTML={{__html: data?.content.html}}></div>
            {/* <div className="mt-5">
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
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PostSingle;
