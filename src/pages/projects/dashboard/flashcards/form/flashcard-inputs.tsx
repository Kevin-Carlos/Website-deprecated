import React, { FC } from "react";
import { Input, Label } from "src/common/ui-elements";
import styled from "styled-components";
import { mediaQuery } from "src/common/styles";
import { Formik } from "formik";

interface FlashcardInputsProps { };

interface FormValues {
  subject: string;
  description: string;
};

export const FlashcardInputs: FC<FlashcardInputsProps> = () => {
  return (
    <Formik<FormValues>
      initialValues={{
        subject: "",
        description: "",
      }}
      onSubmit={() => console.log("")}
    >
      {form => (
        <Wrapper>
          {console.log("for", form.values)}
          <Label label="Subject">
            <Input
              name="subject"
              onChange={form.handleChange}
              value={form.values.subject}
            />
          </Label>
          <Label label="Description">
            <Input
              name="description"
              onChange={form.handleChange}
              value={form.values.description}
            />
          </Label>
        </Wrapper>
      )}
    </Formik>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  ${mediaQuery.tablet} {
    flex-direction: row;
  }
`;