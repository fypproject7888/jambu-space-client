/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../../Common/Button/CustomButton";
import CustomNavbar from "../../Common/CustomNavbar/Index";
import CustomFooter from "../../Shared/Footer/CustomFooter";
import Posting from "./components/Posting";
import "../../Stylesheet/Dashboard/dashboard.scss";
import { API_URL } from "../../utils/contants";

const DashboardPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("authUser"));
  const userType = localStorage.getItem("userType");
  const [showAllPostings, setShowAllPostings] = useState(false);
  const [postings, setPostings] = useState([]);

  const isSeller = userType === "seller";

  const toggleShowPostings = () => setShowAllPostings(!showAllPostings);

  useEffect(() => {
    axios
      .get(API_URL + `auth/${user?._id}/jobs`)
      .then(res => setPostings(res.data))
      .then(err => console.log(err));
  }, []);

  return (
    <>
      <CustomNavbar />

      <Container className="container-2">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h4>Your Dashboard</h4>
            <p>{user?.fullName}</p>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="d-flex align-items-center justify-content-between justify-content-sm-between justify-content-md-end justify-content-lg-end"
          >
            {!isSeller && (
              <CustomButton
                type="primary"
                values="Post a Job"
                onClick={() => navigate("/pages/post-job")}
              />
            )}
          </Col>
        </Row>

        <Row className="my-4">
          <Col xs={12} sm={12} md={8} lg={8}>
            <div className="card-left border mx-2">
              <div className="card-head d-flex justify-content-between border-bottom p-3">
                <h4 className="mb-0">Your Postings</h4>
                <p
                  className="mb-0 txt-primary cursor-pointer"
                  onClick={toggleShowPostings}
                >
                  See {showAllPostings ? "less" : "all"} postings
                </p>
              </div>

              <div className="card-body p-3">
                {showAllPostings ? (
                  postings.map(item => <Posting post={item} />)
                ) : (
                  <Posting post={postings[postings.length - 1]} />
                )}
              </div>
            </div>

            <div className="card-left border mx-2 my-3">
              <div className="card-head d-flex justify-content-between border-bottom p-3">
                <h4 className="mb-0">Your Drafts</h4>
                <p className="mb-0 txt-primary">See all drafts</p>
              </div>

              <div className="card-body p-3">No Drafts</div>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="card-right mx-2 border">
              <div className="card-head border-bottom p-3">
                <h4 className="mb-0">Ready-to-buy projects</h4>
              </div>

              <div className="card-body p-3">
                <p className="mb-0">
                  Know what you need but not how to get it done? Buy a project
                  priced and scoped by a pro to start working right away.
                </p>
                <h6>We think you might like help with</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <CustomFooter />
    </>
  );
};

export default DashboardPage;
