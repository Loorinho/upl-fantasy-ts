import {useForm} from 'react-hook-form';
import { LoginSchema, LoginSchemaType } from '../features/zod/Schemas';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const submitForm = (data: LoginSchemaType) => {
    console.log(data);

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <div className="w-50"> */}
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col space-y-2">
            <div>
          <label htmlFor="" className='block text-gray-500 text-sm'>Username</label>
            <input type="text"  className="border-2 border-gray-400 rounded-md p-2" {...register("email")} />
            {errors.email && <p className="text-red-500">{`${errors.email.message}`}</p>}
            </div>
            <input type="password" placeholder="Password" className="border-2 border-gray-400 rounded-md p-2" {...register("password")} />
            {errors.password && <p className="text-red-500">{`${errors.password.message}`}</p>}
            <button type="submit" disabled={isSubmitting} className="bg-blue-700 text-white px-4 py-2 m-2 outline-none rounded">
              Login
            </button>
          </div>
        </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
