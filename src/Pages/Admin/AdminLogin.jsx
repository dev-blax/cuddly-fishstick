import { Alert, Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { BiLock } from "react-icons/bi";
import { MdMail, MdHome } from "react-icons/md";
import { BiAlarm } from "react-icons/bi";
import AdminLoginHook from "../../hooks/adminLoginHook";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { error, signin, loading, user } = AdminLoginHook();

  return (
    <div className="flex h-screen ">
      <div className="w-full p-10 md:flex bg-pattern justify-center items-center ">
        <form
          action=""
          className=" flex flex-col gap-8 w-full md:max-w-[500px] md:min-w-[400px] p-10 bg-gray-100 shadow-lg rounded-md "
        >
          <div>
            <img src="/logo/logo.png" className=" h-6 md:h-8 " alt="" />{" "}
          </div>
          <header>
            <Typography variant="h2">
              {" "}
              Login to <br /> DTBi Dashboard{" "}
            </Typography>
            <Typography variant="small"> Enter your credentials </Typography>
          </header>
          {error && (
            <Alert icon={<BiAlarm />} color="red">
              {" "}
              {error.message}{" "}
            </Alert>
          )}
          {user && (
            <Alert
              icon={<BiAlarm />}
              color="green"
              className=" flex items-center"
            >
              {" "}
              logged in: {user.user.email}{" "}
            </Alert>
          )}
          <div className="  ">
            <Input
              size="lg"
              variant="outlined"
              label="Email"
              icon={<MdMail />}
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
              variant="outlined"
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
              signin(inputs);
            }}
          >
            {" "}
            Login{" "}
          </Button>

          <Link to="/" className=" flex justify-center max-w-min mx-auto ">
            <Button
              variant="text"
              className=" text-center flex items-center gap-3"
            >
              {" "}
              <MdHome className=" h-6" /> Home{" "}
            </Button>
          </Link>
        </form>
      </div>

      <div className="relative w-full">
        <img
          className="h-full w-full object-cover object-center"
          src="/images/orange.png"
          alt="bg"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <Typography variant="h2">Manage DTBi Website From Here</Typography>
        </div>
      </div>
    </div>
  );
}
