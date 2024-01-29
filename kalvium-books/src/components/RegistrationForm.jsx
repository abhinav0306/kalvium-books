import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const RegistrationForm = () => {
    const [success, setSuccess] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const password = watch("password", "");

    const onSubmit = () => {
        setSuccess(true);
    };

    return (
        <div className="max-w-md mx-auto mt-20">
           <Link to={"/"}> <img src="https://raw.githubusercontent.com/abhinav0306/kalvium-books/main/kalvium-books/src/assets/logo.png" alt="" /></Link>
            <form className="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8  mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Please enter a correct email",
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 10,
                                message: "Password should be at least 10 characters",
                            },
                            pattern: {
                                value: /^(?=.*[!@#$%^&*])/,
                                message: "Password must contain at least one special character",
                            },
                        })}
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repeatPassword">
                        Confirm Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="repeatPassword"
                        type="password"
                        name="repeatPassword"
                        {...register("repeatPassword", {
                            required: "Repeat password is required",
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                    />
                    {errors.repeatPassword && <p className="text-red-500 text-xs italic">{errors.repeatPassword.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded "
                        type="submit"
                    >
                        Submit
                    </button>
                    {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded " role="alert">
                    <p className="font-bold">Registration Successful!!</p>
                </div>
            )}
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
