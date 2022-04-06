import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import coverImg from "../../assets/cover.webp";
import CustomButton from "../../Common/Button/CustomButton";
import section2ManImg from "../../assets/section3.webp";
import section4Img from "../../assets/section4-ltst.webp";
import "../../Stylesheet/Homepage/homePage.scss";
import { BiRightArrowAlt } from "react-icons/bi";
import CustomNavbar from "../../Common/CustomNavbar/Index";
import CustomFooter from "../../Shared/Footer/CustomFooter";

const Homepage = () => {
  return (
    <>
      <CustomNavbar />

      <Container className="cover-section">
        <Row className=" justify-content-between py-3">
          <Col xs={12} sm={12} md={6} lg={6} className="mt-4">
            <h1 className="font-rebrand fw-bold color-primary mb-3">
              How work <br /> should work
            </h1>
            <p className="font-primary cover-para mb-3">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </p>
            <div className="cover-btn-group">
              <CustomButton
                classes="me-3 px-4"
                values="Find Talent"
                type="primary"
              />
              <Button className="rounded-pill px-4" variant="outlined">
                Find Work
              </Button>
            </div>
          </Col>
          <Col md={6} lg={6} className="d-none d-sm-none d-md-block d-lg-block">
            <img className="img-fluid" src={coverImg} alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col className="section2-cont-left py-5 px-5" md={8} lg={8}>
            <h2 className="font-rebrand fw-bold">
              Why businesses <br /> turn to JambuSpace
            </h2>
            <div className="list-items-left">
              <div className="item d-flex ">
                <div className="item-marker-wrapper">
                  <svg
                    className="mt-2 me-3 list-item-marker"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                  >
                    <path d="M9.76 11.144L7 9.574l-2.76 1.57.496-3.268L2.5 5.63l3.063-.506L7 2.144l1.436 2.98 3.064.507-2.236 2.245.496 3.268zM7 0a7 7 0 100 14A7 7 0 007 0z"></path>
                  </svg>
                </div>
                <div className="item-body">
                  <h3 className="mb-2">Proof of quality</h3>
                  <p className="li-item-p font-primary">
                    Check any pro's work samples, client reviews, and identity
                    verification.
                  </p>
                </div>
              </div>

              <div className="item d-flex">
                <div className="item-marker-wrapper">
                  <svg
                    className="mt-2 me-3 list-item-marker"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.933 8.63c.011-1.221-.748-1.903-2.476-2.332V4.03c.53.11 1.057.374 1.574.748l.627-1.023a4.357 4.357 0 00-2.157-.87v-.692h-.967v.67c-1.43.112-2.399.948-2.399 2.168v.023c0 1.276.771 1.89 2.443 2.32v2.333c-.759-.121-1.386-.473-2.036-1.012l-.704 1a5.148 5.148 0 002.696 1.145v1.144h.967v-1.122c1.453-.131 2.432-.957 2.432-2.211V8.63zM14 7A7 7 0 110 7a7 7 0 0114 0zm-6.543.585v2.167c.76-.077 1.19-.451 1.19-1.023v-.022c0-.517-.265-.848-1.19-1.122zm-.879-3.62v2.112c-.936-.285-1.156-.604-1.156-1.11v-.012c-.01-.516.407-.913 1.156-.99z"
                    ></path>
                  </svg>
                </div>
                <div className="item-body">
                  <h3 className="mb-2">No cost until you hire</h3>
                  <p className="li-item-p font-primary">
                    Interview potential fits for your job, negotiate rates, and
                    only pay for work you approve.
                  </p>
                </div>
              </div>

              <div className="item d-flex">
                <div className="item-marker-wrapper">
                  <svg
                    className="mt-2 me-3 list-item-marker"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 7A7 7 0 110 7a7 7 0 0114 0zm-7.23 4.275l4.889-7.11-1.65-1.133-3.676 5.35L3.75 6.346l-1.238 1.57 4.257 3.359z"
                    ></path>
                  </svg>
                </div>
                <div className="item-body">
                  <h3 className="mb-2">Safe and secure</h3>
                  <p className="li-item-p font-primary">
                    Focus on your work knowing we help protect your data and
                    privacy. We’re here with 24/7 support if you need it.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="sect2-main-img d-none d-sm-none d-md-block d-lg-block"
              src={section2ManImg}
              alt=""
            />
          </Col>

          <Col
            className="section2-cont-right py-5 px-4 d-flex align-items-start justify-content-end flex-column"
            md={4}
            lg={4}
          >
            <h2 className="font-primary">
              We’re
              <br /> the world’s work
              <br /> marketplace
            </h2>
            <div className="section2-right-body">
              <div className="list-items">
                <div className="item d-flex">
                  <div className="item-marker-wrapper">
                    <svg
                      fill="white"
                      className="mt-2 me-3 list-item-marker"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 14 14"
                      role="img"
                    >
                      <path d="M10.68 13.928L7 11.83l-3.681 2.098a.542.542 0 01-.803-.553l.668-4.408L.159 5.924a.543.543 0 01.295-.918l4.125-.682L6.512.306a.542.542 0 01.977 0l1.934 4.018 4.123.682a.543.543 0 01.297.918l-3.025 3.042.668 4.408a.545.545 0 01-.806.554"></path>
                    </svg>
                  </div>

                  <div className="item-body">
                    <h3 className="mb-2">4.9/5</h3>
                    <p>Clients rate professionals on Jamnu Space</p>
                  </div>
                </div>

                <div className="item d-flex">
                  <div className="item-marker-wrapper">
                    <img
                      className="mt-2 me-3 list-item-marker"
                      src="https://www.upwork.com/static/assets/Brontes/01adc890/img/group.98cbef9.svg"
                      alt=""
                    />
                  </div>
                  <div className="item-body">
                    <h3 className="mb-2">Award winner</h3>
                    <p>G2’s 2021 Best Software Awards</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="sect2-main-img2 d-block d-sm-block d-md-none d-lg-none"
              src={section2ManImg}
              alt=""
            />
          </Col>
        </Row>
      </Container>

      <Container className="section3-bg py-4 px-4">
        <Row>
          <Col className="text-white" md={12}>
            <h4 className="text-white sect3-head-sml font-rebrand fw-bold">
              For clients
            </h4>
            <h2 className="text-white font-rebrand fw-bold">
              Find Talent <br />
              your way
            </h2>
            <p className="col-10 col-sm-10 col-md-7 col-lg-7 text-white font-primary sect3-head-para">
              {" "}
              Work with the largest network of independent professionals and get
              things done—from quick turnarounds to big transformations.
            </p>
            <div className="row display-cards-sect3 justify-content-between">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-1 my-sm-1 my-md-0 my-lg-0">
                <div className="card-content sect3-card text-white px-3 py-3 rounded d-flex flex-row flex-sm-row flex-md-column flex-lg-column justify-content-between h-100">
                  <h4 className="text-white mt-3 mt-sm-4 mt-md-0 mt-lg-0">
                    Post a job
                    <br /> and hire a pro
                  </h4>
                  <div className="d-flex align-items-end align-items-sm-end align-items-md-start align-items-lg-start">
                    <p className="me-1 mb-0">
                      Talent Marketplace<sup>TM</sup>
                    </p>
                    <BiRightArrowAlt size={25} />
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-1 my-sm-1 my-md-0 my-lg-0">
                <div className="card-content sect3-card text-white px-3 py-3 mx-0 rounded d-flex flex-row flex-sm-row flex-md-column flex-lg-column justify-content-between h-100">
                  <h4 className="text-white mt-3 mt-sm-4 mt-md-0 mt-lg-0">
                    Browse and
                    <br /> Buy Projects
                  </h4>
                  <div className="d-flex align-items-end align-items-sm-end align-items-md-start align-items-lg-start">
                    <p className="me-1 mb-0">
                      Project Catalog<sup>TM</sup>
                    </p>
                    <BiRightArrowAlt size={25} />
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-4 col-lg-4 my-1 my-sm-1 my-md-0 my-lg-0">
                <div className="card-content sect3-card text-white px-3 py-3 rounded d-flex flex-row flex-sm-row flex-md-column flex-lg-column justify-content-between h-100">
                  <h4 className="text-white mt-3 mt-sm-4 mt-md-0 mt-lg-0">
                    Let us help you
                    <br /> find the right talent
                  </h4>
                  <div className="d-flex align-items-end align-items-sm-end align-items-md-start align-items-lg-start">
                    <p className="me-1 mb-0">
                      Talent Scout<sup>TM</sup>
                    </p>
                    <BiRightArrowAlt size={25} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="section-4">
        <Row className="sect4-content">
          <Col md={6} lg={6}>
            <h2 className="font-rebrand fw-bold mb-3">
              Hire a pro
              <br /> for any skill
            </h2>
            <div className="sect4-items">
              <h2 className="sect4-item-head mb-2 display-6 font-primary active">
                Developement & IT
              </h2>
              <h2 className="sect4-item-head mb-2 display-6 font-primary">
                Design & Creative
              </h2>
              <h2 className="sect4-item-head mb-2 display-6 font-primary">
                Sales & Marketing
              </h2>
              <h2 className="sect4-item-head mb-2 display-6 font-primary">
                Writing & Translations
              </h2>
              <h2 className="sect4-item-head mb-2 display-6 font-primary">
                Admin & Customer Support
              </h2>
              <h2 className="sect4-item-head mb-2 display-6 font-primary">
                Finance & Accounting
              </h2>
              <h2 className="sect4-item-head mb-2 display-6 font-primary">
                See all specializations
              </h2>
            </div>
          </Col>

          <Col md={6} lg={6}>
            <div className="img-wrapper px-1 d-none d-sm-none d-md-block d-lg-block">
              <img className="img-fluid rounded" src={section4Img} alt="" />
            </div>

            <div className="sect4-tags d-flex flex-wrap my-4">
              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">
                  Back-End Development
                </p>
              </div>

              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">CMS Development</p>
              </div>

              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">DevOps Engineering</p>
              </div>

              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">
                  Front-End Development
                </p>
              </div>

              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">
                  Full Stack Development
                </p>
              </div>

              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">
                  Mobile App Development
                </p>
              </div>

              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">
                  Systems Admininstration
                </p>
              </div>

              <div className="tag me-3 mb-2">
                <p className="py-1 m-0 px-3 font-primary">UX/UI Design</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="section-5 my-5 pb-5">
        <Row className="section-5-body align-items-stretch justify-content-center">
          <Col xs={12} sm={12} md={12} lg={6} className="p-0 sect5-img-wrapper">
            <div className="sect5-img"></div>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            className="px-5 py-4 sect5-right d-flex flex-column"
          >
            <div className="mb-5">
              <h4 className="font-large font-primary fw-bold mb-3">
                For Talent
              </h4>
              <h1 className="display-2 font-rebrand fw-bold mb-4 py-1">
                Find great work
              </h1>
              <h5 className="sect5-sub-para w-75">
                Meet clients you’re excited to work with and take your career or
                business to new heights.
              </h5>
            </div>

            <hr className="mt-auto" />

            <div className="row justify-content-between">
              <h5 className="col-4 font-primary sect5-sub-para pe-1">
                Find opportunities for every stage of your freelance career
              </h5>
              <h5 className="col-4 font-primary sect5-sub-para px-1">
                Control when, where, and how you work
              </h5>
              <h5 className="col-4 font-primary sect5-sub-para pe-1">
                Explore different ways to earn
              </h5>
            </div>
            <div>
              <CustomButton
                classes="bg-white text-primary"
                values="Find Opportunities"
                type="primary"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <CustomFooter />
    </>
  );
};

export default Homepage;
