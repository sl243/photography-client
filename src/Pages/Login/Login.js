import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import login from '../../images/login/login.jpg'

const Login = () => {
    const { LogIn, GoogleSignIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        LogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()

                const currentUser = {
                    email : user.email,
                }
                console.log(currentUser)

                // get jwt token 
                fetch('https://shamim-photography-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then( res => res.json())
                .then( data => {
                    console.log(data)
                    // localstorage store token .
                    localStorage.setItem('photography-token', data.token)
                    navigate(from, {replace: true})
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    // google sign in
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt=''></img>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-5xl font-bold mt-5 text-white">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary"
                                type='submit'
                                value='Login'>
                            </input>
                        </div>
                        <p className='mt-5'>Don't have an account? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link> </p>

                    </form>
                    <div className="form-control mt-6">
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline btn-primary">
                            Continue With Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;