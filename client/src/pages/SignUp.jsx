import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.username || !formData.email || !formData.password) {
        return setErrorMessage("All the fields are required!!");
      }
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/sign-in");
      } else {
        throw response;
      }
    } catch (error) {
      const errorData = await error.json();
      console.log(errorData);
    }
    setLoading(false);
    setErrorMessage(null);
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="flex mx-auto max-w-4xl gap-10 mt-20 flex-col md:flex-row p-3 min-h-screen">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <Label value="Username" />
              <TextInput
                onChange={handleOnChange}
                type="string"
                placeholder="Username"
                id="username"
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                onChange={handleOnChange}
                placeholder="name@example.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                autoComplete="on"
                type="password"
                onChange={handleOnChange}
                placeholder="Password"
                id="password"
              />
            </div>
            <div className="w-full mt-5">
              <span className="text-red-500 text-sm mb-0 pb-0">
                {errorMessage}
              </span>
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r w-full focus:ring-0 from-red-500 via-orange-400 to-yellow-200 border-none font-bold"
              >
                {loading ? (
                  <div className="flex gap-2 items-center">
                    <Spinner size="sm" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
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
