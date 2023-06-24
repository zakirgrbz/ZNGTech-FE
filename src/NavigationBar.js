import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedLink from "./components/ProtectedLink";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function NavigationBar() {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useContext(UserContext);

  return (
    <div className="container">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link as={NavLink} to="/">
            <img width="45px" src="images/logo.jpg" alt="logo" />
          </Nav.Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLoading ? (
                <>loading</>
              ) : !isAuthenticated ? (
                <>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/"
                    exact
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/about"
                  >
                    ABOUT
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/contact"
                  >
                    CONTACT
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/"
                    exact
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/sellnow"
                  >
                    SELL NOW
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/about"
                  >
                    ABOUT
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/contact"
                  >
                    CONTACT
                  </Nav.Link>
                  <Nav.Link
                    className="mx-5 fs-5 fw-bold"
                    as={NavLink}
                    to="/dashboard"
                  >
                    DASHBOARD
                  </Nav.Link>
                  <ProtectedLink
                    name="Users"
                    link="/users"
                    user={user}
                    roles={["admin"]}
                  />
                </>
              )}
            </Nav>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavigationBar;
