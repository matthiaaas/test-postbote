import React from "react";
import {
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
} from "@postbote/mjml-react";

export default function Example({ name }) {
  return (
    <Mjml>
      <MjmlBody>
        <MjmlSection>
          <MjmlText>{name}</MjmlText>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}
