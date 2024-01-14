import { Alert, Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { BiAbacus, BiLock } from "react-icons/bi";
import { BiAlarm } from "react-icons/bi";
import useSignupWithEmailAndPassword from "../../hooks/useCreateUserWithEmailAndPassword";
import { Link } from "react-router-dom";

export default function AdminSignup() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { error, signup, loading } = useSignupWithEmailAndPassword();

  return (
    <div className=" w-full ">
      <div className=" m-5 ">
        <form action="" className=" flex flex-col gap-5 min-w-[400px] ">
          <header>
            <Typography variant="h2"> Admin Sign up </Typography>
            <Typography variant="small"> Enter your credential </Typography>
          </header>
          {error && (
            <Alert icon={<BiAlarm />} color="red">
              {" "}
              {error.message}{" "}
            </Alert>
          )}
          <div className="  ">
            <Input
              size="lg"
              variant="standard"
              label="Email"
              icon={<BiAbacus />}
              value={inputs.email}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Input
              size="lg"
              variant="standard"
              label="Password"
              type="password"
              icon={<BiLock />}
              value={inputs.password}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  password: e.target.value,
                })
              }
            />{" "}
          </div>

          <Button
            loading={loading}
            className=" bg-dtbi-blue flex justify-center "
            onClick={() => {
              signup(inputs);
            }}
          >
            {" "}
            Sign up{" "}
          </Button>

          <Link to='/admin/login' className=" flex justify-center">
            <Button variant="text" className=" text-center">Admin Login</Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
