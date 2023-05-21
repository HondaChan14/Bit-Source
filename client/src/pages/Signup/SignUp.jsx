import React from 'react';
import { RiEyeCloseFill, RiEyeLine } from 'react-icons/ri';

const SignUp = () => {
    const [isPasswordShowing, setIsPasswordShowing] = React.useState(false);
    const [isConfirmPasswordShowing, setIsConfirmIsPasswordShowing] =
        React.useState(false);

    function togglePassword() {
        setIsPasswordShowing(!isPasswordShowing);
    }
    function toggleConfirmPassword() {
        setIsConfirmIsPasswordShowing(!isConfirmPasswordShowing);
    }
    return (
        <section class='flex justify-center items-center min-h-[85.8vh]'>
            <div className='grid grid-cols-2 max-w-9xl bg-white px-4 pt-4 rounded'>
                <div>
                    <img src='https://placehold.co/600x555' />
                </div>

                <div>
                    <form
                        action='/signup'
                        method='POST'
                        class='bg-white px-20 pt-6 pb-8 mb-4'
                    >
                        {/* <!-- Username --> */}
                        <div>
                            <label class='label-style' for='userName'>
                                Username
                            </label>
                            <input
                                type='text'
                                placeholder='Username'
                                id='userName'
                                name='userName'
                                class='input-style'
                            />
                        </div>
                        {/* <!-- Username --> */}

                        {/* <!-- First Name -->  */}
                        <div className='mt-2'>
                            <label class='label-style' for='firstName'>
                                First Name
                            </label>
                            <input
                                type='text'
                                placeholder='First Name'
                                id='firstName'
                                name='firstName'
                                class='input-style'
                                required
                            />
                        </div>
                        {/* <!-- First Name -->  */}

                        {/* <!-- Last Name -->  */}
                        <div className='mt-2'>
                            <label class='label-style' for='lastName'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                placeholder='Last Name'
                                id='lastname'
                                name='lastName'
                                class='input-style'
                                required
                            />
                        </div>
                        {/* <!-- Last Name -->  */}

                        {/* <!-- Email -->  */}
                        <div className='mt-2'>
                            <label class='label-style' for='emailInput'>
                                Email
                            </label>
                            <input
                                type='email'
                                placeholder='Email'
                                id='emailInput'
                                name='email'
                                class='input-style'
                                required
                            />
                        </div>
                        {/* <!-- Email -->  */}

                        {/* <!-- Password -->   */}
                        <div className='mt-2'>
                            <label class='label-style' for='password'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    type={
                                        isPasswordShowing ? 'text' : 'password'
                                    }
                                    placeholder='***************'
                                    id='password'
                                    aria-hidden='true'
                                    name='password'
                                    className='input-style pr-10' // Added 'pr-10' for padding on the right to accommodate the icon
                                    required
                                />
                                <div
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                    onClick={togglePassword}
                                >
                                    {isPasswordShowing ? (
                                        <RiEyeLine />
                                    ) : (
                                        <RiEyeCloseFill />
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Password -->  */}

                        {/* <!-- Confirm Password -->   */}
                        <div className='mt-2'>
                            <label class='label-style' for='confirmPassword'>
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <input
                                    type={
                                        isConfirmPasswordShowing
                                            ? 'text'
                                            : 'password'
                                    }
                                    placeholder='***************'
                                    id='confirmPassword'
                                    aria-hidden='true'
                                    name='confirmPassword'
                                    class='input-style'
                                    required
                                />
                                <div
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                                    onClick={toggleConfirmPassword}
                                >
                                    {isConfirmPasswordShowing ? (
                                        <RiEyeLine />
                                    ) : (
                                        <RiEyeCloseFill />
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Confirm Password -->  */}

                        {/* <!--Button --> */}
                        <div class='flex items-center justify-between mt-6'>
                            <button
                                type='submit'
                                class='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline'
                            >
                                Sign Up
                            </button>
                            <a
                                class='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                                href='#'
                            >
                                Forgot Password?
                            </a>
                        </div>
                        {/* <!--Button --> */}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
