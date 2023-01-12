import React from "react";
import { Container } from "react-bootstrap";
import { ContactsBlock } from "./ContactsBlock";
import { ContactsBlockForm } from "./ContactsBlockForm";

export const Contacts = () => {
  return (
    <Container className="contacts">
        <h1 className="contacts__title">
          Контакти
        </h1>
        <ContactsBlock />
        <ContactsBlockForm />
    </Container>
  )
}