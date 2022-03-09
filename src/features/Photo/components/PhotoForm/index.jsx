import InputField from "../../../../custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};
function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field required"),

    categoryId: Yup.number().required("This field required").nullable(),

    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
