import styled from "styled-components";

function ContactForm() {
  return (
    <SContactForm>
      <Form>
        <Heading>Let's Connect</Heading>
        <Label>Name:</Label>
        <Input type="text" />
        <Label>Email:</Label>
        <Input type="email" />
        <Label>Message:</Label>
        <Textarea></Textarea>
        <Button>Submit</Button>
      </Form>
      <Image src="./contact-image.jpg" alt="Contact" />
    </SContactForm>
  );
}

const SContactForm = styled.section`
  display: flex;
  flex-wrap:wrap;
  min-width:300px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: #333;
  padding: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 500px;
`;

const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  text-align:center;
`;

const Label = styled.label`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 30px;
  font-size: 18px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  border: 1px solid ;
  border-radius: 5px;
  margin-bottom: 30px;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #e60000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #b30000;
  }
`;

const Image = styled.img`
  width: 50%;
  max-width: 500px;
  margin-left: 50px;
  border-radius: 5px;
`;

export default ContactForm;
