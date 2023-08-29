import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "../features/zod/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const submitForm = (data: LoginSchemaType) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center  absolute inset-1">
      {/* <div className="w-50"> */}
      <form
        onSubmit={handleSubmit(submitForm)}
        className="border-2 border-blue-600 py-7 px-5 rounded-md login_form"
      >
        <div className="my-10 flex flex-col items-center gap-3">
          <p className="text-3xl text-blue-700">UPL Fantasy</p>
          <p className="text-xl font-bold text-center text-blue-600 ">
            Login to your account
          </p>
        </div>
        <div className="">
          <div>
            <label htmlFor="" className="block text-gray-500 text-sm">
              Username
            </label>
            <input
              type="text"
              className="border-2  rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-700 w-full"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 mb-2">{`${errors.email.message}`}</p>
            )}
          </div>
          <div>
            <label htmlFor="" className="block text-gray-500 text-sm mt-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              className="border-2  rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-700 w-full"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-700 text-white px-4 py-2 mt-2 outline-none rounded w-full"
          >
            Login
          </button>

          <p className="mt-2">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className=" text-blue-600 ml-2 mr-1">Register</span>here
            </Link>
          </p>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
