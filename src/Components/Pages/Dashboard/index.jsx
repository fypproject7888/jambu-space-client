import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import CustomButton from "../../Common/Button/CustomButton";
import CustomNavbar from "../../Common/CustomNavbar/Index";
import { BsThreeDots } from "react-icons/bs";
import "../../Stylesheet/Dashboard/dashboard.scss";
import CustomFooter from "../../Shared/Footer/CustomFooter";

const DashboardPage = () => {
    return (
        <>
            <CustomNavbar />

            <Container className="container-2">
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <h4>Your Dashboard</h4>
                        <p>Ryan Dorrington</p>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center justify-content-between justify-content-sm-between justify-content-md-end justify-content-lg-end">
                        <Button sx={{'&:hover' : {boxShadow: '0 0 3px darkgrey'}}} className="rounded-pill bg-white border text-capitalize mx-3">
                            Browse Project Catalog
                        </Button>
                        <CustomButton type="primary" values="Post a Job" />
                    </Col>
                </Row>

                <Row className="my-4">
                    <Col xs={12} sm={12} md={8} lg={8}>
                        <div className="card-left border mx-2">
                            <div className="card-head d-flex justify-content-between border-bottom p-3">
                                <h4 className="mb-0">Your Postings</h4>
                                <p className="mb-0 txt-primary">See all postings</p>
                            </div>

                            <div className="card-body p-3">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>
                                        Help me develop a MERN stack website similar
                                        to upwork/fiverr
                                    </h6>

                                    <BsThreeDots />
                                </div>

                                <Row className="justify-content-between">
                                    <Col xs={12} sm={12} md={6} lg={6} className="mb-3 mb-sm-3 mb-md-0 mb-lg-0">
                                        <p className="mb-0">Public - Hours</p>
                                        <p className="mb-0">Posted 19 days ago by You</p>
                                    </Col>

                                    <Col xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center justify-content-between">
                                        <div className="card-sub-item d-flex flex-column">
                                            <p className="mb-0 txt-primary">
                                                22 <span className="txt-secondary">(17 new)</span>
                                            </p>
                                            <p className="mb-0">Proposals</p>
                                        </div>

                                        <div className="card-sub-item d-flex flex-column">
                                            <p className="mb-0 txt-primary">9</p>
                                            <p className="mb-0">Messaged</p>
                                        </div>

                                        <div className="card-sub-item d-flex flex-column">
                                            <p className="mb-0">0</p>
                                            <p className="mb-0">Hired</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className="card-left border mx-2 my-3">
                            <div className="card-head d-flex justify-content-between border-bottom p-3">
                                <h4 className="mb-0">Your Drafts</h4>
                                <p className="mb-0 txt-primary">See all drafts</p>
                            </div>

                            <div className="card-body p-3">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>
                                        Help me develop a MERN stack website similar
                                        to upwork/fiverr
                                    </h6>

                                    <BsThreeDots />
                                </div>

                                <Row className="justify-content-between">
                                    <Col>
                                        {/* <p className="mb-0">Public - Hours</p> */}
                                        <p className="mb-0">Saved 19 days ago</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </Col>

                    <Col xs={12} sm={12} md={4} lg={4}>
                        <div className="card-right mx-2 border">
                            <div className="card-head border-bottom p-3">
                                <h4 className="mb-0">Ready-to-buy projects</h4>
                            </div>

                            <div className="card-body p-3">
                                <p className="mb-0">Know what you need but not how to get it done? Buy a project priced and scoped by a pro to start working right away.</p>
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
