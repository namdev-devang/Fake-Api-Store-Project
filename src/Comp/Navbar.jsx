import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  // Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navba = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = <></>;

  return (
    <>
      <Navbar className=" inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-medium text-black"
          >
            <span className="font-bold text-2xl">Fashion-Collection's</span>
          </Typography>
          {/* <ul className="flex gap-5 justify-center cursor-pointer">
            <li className="hover:font-bold text-center ">Home</li>
            <li className="hover:font-bold text-center ">Product</li>
            <li className="hover:font-bold text-center ">About</li>
            <li className="hover:font-bold text-center ">Contact</li>
          </ul> */}
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <Link to="/singup">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-blue-900 text-white rounded-md font-semibold hover:shadow-2xl hover:bg-blue-400 py-3 px-5"
              >
                Signup
              </Button>
            </Link>

            <Link to="/login">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block bg-blue-900 text-white rounded-md font-semibold hover:shadow-2xl hover:bg-blue-400 py-3 px-5"
              >
                Login
              </Button>
            </Link>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 bg-blue-500"
          >
            <span>Signup</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 bg-blue-500"
          >
            <span>Login</span>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
};
export default Navba;
