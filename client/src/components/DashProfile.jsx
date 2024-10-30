import { Button, Label, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleOnChange = () => {};

  return (
    <div className="mx-auto w-full max-w-lg m-5">
      <div className="w-full flex flex-col items-center gap-3">
        <h1 className="text-3xl">Profile</h1>
        <div className="h-32 w-32 border-8 border-gray-300 overflow-hidden rounded-full">
          <img
            src={currentUser.photoUrl}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full px-5  mt-2">
          <input accept="image/*" type="file" />
        </div>
        <div className="w-full">
          <form
            className="flex flex-col gap-5 w-full p-5"
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <Label value="Username" />
              <TextInput
                placeholder="Username"
                id="username"
                type="String"
                onChange={handleOnChange}
                value={currentUser.username}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                placeholder="Email"
                id="email"
                type="String"
                onChange={handleOnChange}
                value={currentUser.email}
              />
            </div>
            <div>
              <Label value="Change Password" />
              <TextInput
                autoComplete="on"
                placeholder="Change Password"
                id="password"
                type="password"
                onChange={handleOnChange}
              />
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-r w-full focus:ring-0 from-red-500 via-orange-400 to-yellow-200 border-none font-bold"
            >
              Edit Profile
            </Button>
            <Button
              type="button"
              gradientMonochrome="failure"
              className="w-full focus:ring-0 bg-red-500 border-none font-bold"
            >
              Delete Profile
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
