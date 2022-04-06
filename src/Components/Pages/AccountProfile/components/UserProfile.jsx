import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import { capitalize } from "lodash/string";
import { API_URL, BASE_URL } from "../../../utils/contants";

function UserProfile() {
  const user = JSON.parse(localStorage.getItem("authUser"));
  const [loggedInUser, setLoggedInUser] = useState(user);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAttr, setSelectedAttr] = useState(null);

  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);

  const handleUpdateAttr = event => {
    event.preventDefault();
    toggleEditModal();
    let newUser = {
      ...loggedInUser,
      [selectedAttr.attr]: selectedAttr.value,
    };
    let userType = localStorage.getItem("userType");
    setLoggedInUser(newUser);
    axios
      .put(API_URL + `auth/${loggedInUser._id}`, { ...newUser, type: userType })
      .then(res => toast(res.data.message))
      .catch(err => console.log(err));
    localStorage.setItem("authUser", JSON.stringify(newUser));
    setSelectedAttr(null);
  };

  const handleUpdateProfilePicture = event => {
    if (event.target.files && event.target.files[0]) {
      let userType = localStorage.getItem("userType");
      let payload = new FormData();
      payload.append("fullName", loggedInUser.fullName);
      payload.append("email", loggedInUser.email);
      payload.append("username", loggedInUser.username);
      payload.append("password", loggedInUser.password);
      payload.append("country", loggedInUser.country);
      payload.append("phone", loggedInUser.phone);
      payload.append("type", userType);
      payload.append("image", event.target.files[0]);
      axios
        .put(API_URL + `auth/picture/${loggedInUser._id}`, payload)
        .then(res => {
          let newUser = {
            ...loggedInUser,
            image: res.data.image,
          };
          toast.success("Profile Picture Updated successfully");
          setLoggedInUser(newUser);
          localStorage.setItem("authUser", JSON.stringify(newUser));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      {/* Modal for Editing Attributes */}
      <Modal show={isEditModalOpen} onHide={toggleEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateAttr}>
            <Form.Group className="mb-3">
              <Form.Label>{capitalize(selectedAttr?.attr)}</Form.Label>
              <Form.Control
                type="text"
                as="input"
                value={selectedAttr?.value}
                placeholder="Edit Attribute"
                onChange={e =>
                  setSelectedAttr({
                    ...selectedAttr,
                    value: e.target.value,
                  })
                }
              />
            </Form.Group>
            <div className="py-3">
              <Button variant="success" type="submit">
                Update
              </Button>
              <Button
                style={{ marginLeft: "10px" }}
                variant="secondary"
                onClick={toggleEditModal}
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Row className="user-profile">
        {/* User Profile Image */}
        <Col md={3} className="user-img-section">
          <div className="profile-img-wrapper">
            <img src={BASE_URL + loggedInUser?.image?.url} alt="User Profile" />
            <div className="change-photo-btn">
              <label htmlFor="user-img">Change</label>
              <input
                type="file"
                className="d-none"
                id="user-img"
                onChange={handleUpdateProfilePicture}
              />
            </div>
          </div>
        </Col>

        {/* User Details */}
        <Col md={9} className="user-detail-section">
          <div className="w-100 d-flex justify-content-between">
            <h4 className="font-primary">{loggedInUser.fullName}</h4>
            <p
              className="edit-btn"
              onClick={() => {
                setSelectedAttr({
                  attr: "fullName",
                  value: loggedInUser.fullName,
                });
                toggleEditModal();
              }}
            >
              Edit
            </p>
          </div>
          {loggedInUser?.email && (
            <div className="w-100 d-flex justify-content-between">
              <h5>{loggedInUser?.email}</h5>
              <p
                className="edit-btn"
                onClick={() => {
                  setSelectedAttr({
                    attr: "email",
                    value: loggedInUser?.email,
                  });
                  toggleEditModal();
                }}
              >
                Edit
              </p>
            </div>
          )}
          {loggedInUser?.company && (
            <div className="w-100 d-flex justify-content-between">
              <p className="w-75">{loggedInUser?.company}</p>
              <p
                className="edit-btn"
                onClick={() => {
                  setSelectedAttr({
                    attr: "company",
                    value: loggedInUser?.company,
                  });
                  toggleEditModal();
                }}
              >
                Edit
              </p>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
}

export default UserProfile;
