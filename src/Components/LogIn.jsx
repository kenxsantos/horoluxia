import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import Navbar from "./Navbar";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useStateContext();
  const handleSignIn = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-12 lg:py-0">
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
            Enter your credentials
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
            onSubmit={handleSignIn}
          >
            <div className="mb-1 flex flex-col gap-6">
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
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal  font-poppins"
                >
                  Remember me
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button fullWidth className="font-poppins mt-6" type="submit">
              Log In
            </Button>

            <Typography color="gray" className="mt-4 text-center  font-poppins">
              <Link to="/forgot-password" className="text-sm text-gray-900">Forgot password?</Link>
            </Typography>
            <Typography color="gray" className="mt-4 text-center  font-poppins">
              Don't have an account? <Link to="/signup" className="font-medium text-gray-900">Sign Up</Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}
export default LogIn;
