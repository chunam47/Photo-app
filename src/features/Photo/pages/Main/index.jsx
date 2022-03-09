import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import Image from "../../../../constants/images";
function MainPage(props) {
  return (
    <div className="photo-main">
      <Container>
        <Banner title="Your awsome photos" backgroundUrl={Image.NIGHT_2} />
        <Container className="text-center">
          <Link to="/photos/add">Add new photo</Link>
        </Container>
      </Container>
    </div>
  );
}

export default MainPage;
