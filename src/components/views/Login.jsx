import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../helpers/queries";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
    reset();
    iniciarSesion(usuario).then((respuesta)=>{
      if(respuesta){
        console.log("Aqui esta todo bien con el usuario")
      }else{
        console.log("Aqui esta todo mal")
      }
    })
  };

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El Email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "El email debe tener el siguiente formato: mail@dominio.com",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "El password debe tener entre 8 a 16 caracteres, al menos una minuscula y al menos una mayuscula. No puede tener símbolos.",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
