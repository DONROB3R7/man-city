import React from "react";

const renderTemplate = props => {
  let formTemplate = null;

  /*switch (formdata.element) {
    case "input":
      formTemplate = <div>Input with something</div>;
      break;
    default:
      formTemplate = null;
  }*/
  return formTemplate;
};

const FormField = props => {
  return <div>{renderTemplate()}</div>;
};

export default FormField;
