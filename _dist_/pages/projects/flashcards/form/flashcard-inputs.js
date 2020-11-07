import React from "../../../../../web_modules/react.js";
import {useRecoilState} from "../../../../../web_modules/recoil.js";
import styled from "../../../../../web_modules/styled-components.js";
import {Formik} from "../../../../../web_modules/formik.js";
import {flashcardState} from "../../../../state/flashcards/index.js";
import {Input, SubmitButton, Label} from "../../../../common/ui-elements/forms/index.js";
;
;
export const FlashcardInputs = ({
  cardIndex,
  setIndex
}) => {
  const [cards, updateCards] = useRecoilState(flashcardState);
  const addCard = (s, d) => updateCards([{subject: s, description: d}, ...cards]);
  const removeCard = (idx) => updateCards(cards.filter((c) => c.subject !== cards[idx].subject));
  return /* @__PURE__ */ React.createElement(Formik, {
    initialValues: {
      subject: "",
      description: "",
      index: cardIndex,
      type: null
    },
    onSubmit: (values, helpers) => submit(values, helpers, addCard, removeCard, setIndex),
    enableReinitialize: true
  }, (form) => {
    return /* @__PURE__ */ React.createElement("form", {
      onSubmit: form.handleSubmit,
      style: {width: "70%"}
    }, /* @__PURE__ */ React.createElement(FormInputGrid, null, /* @__PURE__ */ React.createElement(StyledLabel1, {
      label: "Subject"
    }, /* @__PURE__ */ React.createElement(Input, {
      name: "subject",
      onChange: form.handleChange,
      value: form.values.subject
    })), /* @__PURE__ */ React.createElement(StyledLabel2, {
      label: "Description"
    }, /* @__PURE__ */ React.createElement(Input, {
      name: "description",
      onChange: form.handleChange,
      value: form.values.description
    })), /* @__PURE__ */ React.createElement(SubmitButton, {
      onSubmit: () => form.submitForm,
      onClick: () => form.setFieldValue("type", "adding")
    }, /* @__PURE__ */ React.createElement("span", {
      style: {display: "flex", justifyContent: "center", alignItems: "center"}
    }, "Add", /* @__PURE__ */ React.createElement("svg", {
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "2.5rem",
      height: "2rem",
      style: {marginBottom: "0.5rem"}
    }, /* @__PURE__ */ React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
    })))), /* @__PURE__ */ React.createElement(SubmitButton, {
      disabled: !cards.length,
      onSubmit: () => form.submitForm,
      onClick: () => form.setFieldValue("type", "deleting"),
      color: "dark_teal"
    }, /* @__PURE__ */ React.createElement("span", {
      style: {display: "flex", justifyContent: "center", alignItems: "center"}
    }, "Delete", /* @__PURE__ */ React.createElement("svg", {
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      width: "2.5rem",
      height: "2.5rem",
      style: {margin: "0 0 0 0.5rem"}
    }, /* @__PURE__ */ React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    }))))));
  });
};
function submit(values, {setSubmitting, resetForm}, addCard, removeCard, setIndex) {
  setSubmitting(true);
  if (values.type === "deleting") {
    values.index !== 0 ? setIndex(values.index - 1) : null;
    removeCard(values.index);
    setSubmitting(false);
    resetForm();
    return;
  }
  addCard(values.subject, values.description);
  setSubmitting(false);
  resetForm();
  return;
}
const StyledLabel1 = styled(Label)``;
const StyledLabel2 = styled(Label)``;
const FormInputGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: minmax(0, 1fr);

  ${({theme}) => theme.mediaQuery.laptop} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;
//# sourceMappingURL=flashcard-inputs.js.map
