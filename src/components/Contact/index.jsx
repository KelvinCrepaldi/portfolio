import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import emailjs from "emailjs-com";

import { ContactContainer } from "./Contact.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Por favor escreva seu nome."),
    email: yup
      .string()
      .required("Por favor escreva seu e-mail")
      .email("Formato de e-mail inválido"),
    message: yup.string().required("Por favor escreva uma mensagem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (e) => {
    emailjs
      .send("service_d3ydfkl", "template_or08f1p", e, "Iwkjc70G9OxRfq6OQ")
      .then(
        (result) => {},
        (error) => {}
      );
    resetField("name");
    resetField("email");
    resetField("message");
  };

  return (
    <ContactContainer>
      <h2>Acesse minhas páginas:</h2>
      <div className="social-links">
        <a
          href="https://github.com/KelvinCrepaldi"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/kelvincrepaldi/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
      <h2>Ou deixe uma mensagem:</h2>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("name")} />
        {errors.name?.message && (
          <span className="error-message">{errors.name?.message}</span>
        )}

        <input placeholder="Email" {...register("email")} />
        {errors.email?.message && (
          <span className="error-message">{errors.email?.message}</span>
        )}

        <textarea type="text" placeholder="Mensagem" {...register("message")} />
        {errors.message?.message && (
          <span className="error-message">{errors.message?.message}</span>
        )}

        <button type="submit">Enviar mensagem!</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
