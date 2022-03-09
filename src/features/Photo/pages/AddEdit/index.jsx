import React from "react";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import "./AddEdit.scss";

AddEdid.propTypes = {};
function AddEdid(props) {
  const handleSubmit = (values) => {
    console.log("Form submit: ", values);
  };
  return (
    <Container>
      <div className="photo-edit">
        <Banner title="Pick your amazing photo" />
        <div className="photo-edit__form">
          <PhotoForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Container>
  );
}

export default AddEdid;
