import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorMsg;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (user || gUser) {
      navigate('/');
    }
  }, [user, gUser, navigate]);

  if (loading || gLoading) {
    return <Loading />
  }
  if (error || gError) {
    errorMsg = <p className='text-red-600'> {error?.message}{gError?.message}</p>
  }
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className='text-2xl font-bold text-center'>Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text"
                {...register("email",
                  {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  }
                  , {
                    pattern:
                    {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a Valid email'
                    }
                  }
                )}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs" />

              <label className="label">
                {errors.email?.type === 'required' &&
                  <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' &&
                  <span className='label-text-alt text-red-500'>{errors.email.message}</span>}

              </label>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"
                {...register("password",
                  {
                    required: {
                      value: true,
                      message: 'This field is required'
                    }
                  },
                  {
                    pattern: {
                      value: /^[A-Za-z]\w{7,14}$/,
                      message: 'please include special characters'
                    }
                  }
                )}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
              {
                error && errorMsg
              }
              <p className='mb-3'>Create an account?
                <small className='text-secondary font-semibold'><Link to='/signup'> Sign up</Link></small></p>
              <input disabled={errors.password || errors.email} type="submit" value="Submit" className="btn" />
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;