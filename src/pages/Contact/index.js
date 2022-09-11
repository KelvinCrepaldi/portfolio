import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { ContactContainer } from "./Contact.styles";
import ContentContainer from "../../components/ContentContainer ";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <ContactContainer>
      <ContentContainer title="Contato" icon={faEnvelope}>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Nome" {...register("name")} />
          {errors.name?.message}
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
          <textarea
            type="text"
            placeholder="Mensagem"
            {...register("message")}
          />
          {errors.message?.message}
          <button type="submit">Enviar mensagem!</button>
        </form>
      </ContentContainer>
    </ContactContainer>
  );
};

export default Contact;
