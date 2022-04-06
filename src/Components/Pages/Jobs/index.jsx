import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import CustomNavbar from "../../Common/CustomNavbar/Index";
import CustomFooter from "../../Shared/Footer/CustomFooter";
import JobCard from "./components/JobCard";
import "../../Stylesheet/Jobs/jobs.scss";
import { API_URL } from "../../utils/contants";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + "jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <CustomNavbar />

      <Container className="container-2">
        <Row>
          <Col>
            <h2 className="color-primary font-rebrand fw-bold m-0">Jobs</h2>
            <p className="my-4 font-18 text-muted">
              Here are some jambu-space jobs for you. Lets pick one!!!
            </p>

            <h5 className="m-0 mb-1">Top Projects you may like</h5>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-0">
                These projects are highly rated by other clients
              </p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-start my-4">
          {jobs
            .filter(job => !job.deliveryDate)
            .map(item => (
              <JobCard job={item} />
            ))}
        </Row>
      </Container>

      <CustomFooter />
    </>
  );
};

export default JobsPage;
