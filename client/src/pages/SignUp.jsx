import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex mx-auto max-w-4xl gap-10 mt-20 flex-col md:flex-row p-3">
        <div className="w-full flex-1">
          <Link to="/" className="font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-200 rounded-lg text-gray-700">
              Suchith&apos;s
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm font-semibold">
            This is a demo project. You can sign up with your email and password
          </p>
        </div>
        <div className="w-full flex-1">
          <form className="flex flex-col gap-3">
            <div>
              <Label value="Username" />
              <TextInput type="string" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@example.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button
              type="submit"
              className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-200 border-none mt-5 font-bold"
            >
              Sign Up
            </Button>
            <div className="flex gap-2 text-sm font-semibold">
              <span>Already have an account?</span>
              <Link className="text-blue-500" to="/sign-in">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
