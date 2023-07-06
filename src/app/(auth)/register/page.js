"use client"


import Navbar from "@/components/Navbar";

export default function Register() {

    const jwt = require('jsonwebtoken')

    if(localStorage.getItem("token") !== null){
        const jwtemail = jwt.decode(localStorage.getItem("token")).user.email
        console.log("logged in as " + jwtemail)
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // Annule la soumission du formulaire
        const {email, firstName, lastName, password, passwordc} = event.target.elements;
        const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
        const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{10,}$/g

        if (!regexpassword.test(password.value)) {
            alert("Mot de passe invalide \n il doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial")
            return
        }
        if (!regexmail.test(email.value)) {
            alert("Email invalide")
            return
        }

        const body = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value,
            password: password.value,
            passwordc: passwordc.value,
        };
        fetch("/api/users", {
            method: "POST", body: JSON.stringify(body), headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status === 201) {
                console.log("User created");
                //redirection vers la page de connexion
                window.location.href = "/login";
            } else {
                console.log("Error");
            }
        });
    }

    return (
        <main className="bg-white">
            <Navbar />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 pt-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="/api/users" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-0">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-0">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="firstName"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-0">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="last_name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-0">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm password
                            </label>
                            <div className="mt-0">
                                <input
                                    id="passwordc"
                                    name="passwordc"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="login" className="font-semibold leading-6 text-primary hover:text-secondary">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </main>
    )
}