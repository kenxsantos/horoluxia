import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

import Navbar from "./Navbar";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function SignUp() { 
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const {register, errors} = useStateContext();

  const handleSignUp = async (e) => {
    e.preventDefault();
    register({firstname, lastname, email, password, password_confirmation});
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
      <Card
        color="transparent"
        shadow={false}
        className="shadow-md p-6 font-poppins"
      >
        <Typography
          variant="h2"
          className="text-black text-center font-horoluxia"
        >
          Horoluxia
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-center font-poppins"
        >
         Enter your details to register
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
          onSubmit={handleSignUp}
        >
          <div className="mb-1 flex flex-col gap-6">
            <div>
              <Input
                size="lg"
                label="First Name"
                name="firstname"
                    id="firstname"
                    value={firstname}
                    onChange={ev => setFirstname(ev.target.value)}
                autoFocus
              />
              {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname[0]}</span>}
            </div>
            <div>
              <Input
                size="lg"
                label="Last Name"
                name="lastname"
                    id="lastname"
                    value={lastname}
                    onChange={ev => setLastame(ev.target.value)}
                autoFocus
              />
              {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname[0]}</span>}
            </div>
            <div>
              <Input
                size="lg"
                label="email@example.com"
                name="email"
                id="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                autoFocus
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email[0]}</span>}
            </div>
            <div>
              <Input
                size="lg"
                label="Password"
                type="password"
                className="focus:outline-none"
                name="password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                required
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password[0]}</span>}
            </div>
            <div>
            <Input
                size="lg"
                label="Confirm Password"
                type="password"
                name="password_confirmation"
                                id="password_confirmation"
                                value={password_confirmation}
                                onChange={ev => setPasswordConfirmation(ev.target.value)}
                required
              />
            </div>
          </div>
          <Button fullWidth className="font-poppins mt-6" type="submit">
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center  font-poppins">
            Already have an account? <Link to="/login" className="font-medium text-gray-900">Log In</Link>
          </Typography>
        </form>
      </Card>
    </div>
  </>
  );
}

export default SignUp;
