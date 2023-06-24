import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import userService from "../services/userService";

function Dashboard() {
  useEffect(() => {
    getUser();
    // eslint-disable-next-line 
  }, []);

  const user = useContext(UserContext);
  const [ currentUser , setCurrentUser ] = useState("")

  const getUser = async () => {
    try {
      const data = await userService.getUser(user?.email);
      setCurrentUser(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  if (!user) {
    return null;
  }
 

  return (
    <Container className="Bgg">
      <div className="d-flex justify-content-center align-items-center">
        <Row className="col-6 d-flex flex-column align-items-center">
          <Col md={2} className="mb-3 mt-5 mb-md-5">
            <img
              src={user?.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture"
            />
          </Col>
          <Col md className="text-center">
            <h1 className="text-dark h1">{currentUser?.firstName} {currentUser?.lastName}</h1>
            <h1 className="lead text-dark h3">{currentUser?.email}</h1>
            <p className="text-dark h3"> {new Date(currentUser?.birthday).toLocaleDateString("tr-TR")}</p>
            <p className="text-dark h3">{currentUser?.phoneNumber}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Dashboard;
