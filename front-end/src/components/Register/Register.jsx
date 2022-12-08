import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/apiRequest';

const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [avatar, setAvatar] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();//to not loading page again
        //the name have to same title in req.body in postman
        const newUser = {
            email: email,
            password: password,
            username: username,
            name: name,
            DoB: dob,
            aboutMe: aboutMe,
            imageAvatar: avatar,
        };
        registerUser(newUser, dispatch, navigate);
    }
    return (

        <>
            <section class="bg-white">
                <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <img
                            alt="Night"
                            src="https://free4kwallpapers.com/uploads/originals/2020/01/10/fairy-tale-book-princess-wallpaper.jpg"
                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                        />

                        <div class="hidden lg:relative lg:block lg:p-12">
                            <span class="sr-only">Home</span>

                            


                            <h2 class="mt-6 flex text-2xl font-bold text-white sm:text-3xl md:text-4xl br-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                <path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />

                            </svg>
                                Welcome to Story website
                            </h2>

                            <p class="mt-4 leading-relaxed text-white/90">
                                Let register yourself an account to join in sharing stories with us
                            </p>
                        </div>


                    </section>

                    <main
                        aria-label="Main"
                        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                    >
                        <div class="max-w-xl lg:max-w-3xl">
                            <div class="relative -mt-16 block lg:hidden">
                                <div
                                    class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                                >
                                    <img src="../logoStory.jpg" alt=""  className='rounded-full'/>
                                </div>

                                <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                    Welcome to Story website
                                </h1>

                                <p class="mt-4 leading-relaxed text-gray-500">
                                    Let register yourself an account to join in sharing stories with us
                                </p>
                            </div>

{/* -------------------------------------------------------------------------------------------------------------------------------- */}

                            <form class="mt-8 grid grid-cols-6 gap-6"
                                onSubmit={(e) => handleRegister(e)}
                            >
                                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl col-span-6">
                                    Register form
                                </h1>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="FirstName"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="Name"
                                        placeholder="Password"
                                        className="peer h-8 w-full border-none p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm rounded-md shadow-sm"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="FirstName"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        id="Password"
                                        placeholder="Password"
                                        className="peer h-8 w-full border-none p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm rounded-md shadow-sm"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />

                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="Email" class="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="peer h-8 w-full border-none p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm rounded-md shadow-sm"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="Password"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="peer h-8 w-full border-none p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm rounded-md shadow-sm"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="Password"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Date Of Birth
                                    </label>

                                    <input
                                        type="date"
                                        id="dob"
                                        name="password"
                                        className="peer h-8 w-full border-none p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm rounded-md shadow-sm"
                                        onChange={(e) => setDob(e.target.value)}
                                    />
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="Password"
                                        class="block text-sm font-medium text-gray-700"
                                    >
                                        Something about me
                                    </label>

                                    <textarea
                                        type="textarea"
                                        id="Password"
                                        name="password"
                                        className="peer h-8 w-full border-none p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm rounded-md shadow-sm"
                                        onChange={(e) => setAboutMe(e.target.value)}
                                    />
                                </div>

                                <div class="col-span-6 ">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Your Avatar</span>
                                        <input id="file-upload"
                                            name="file-upload"
                                            type="file" className="sr-only"
                                            onChange={(e) => setAvatar(e.target.files[0])}
                                        />
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </label>
                                </div>

                                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 
                                        px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent
                                         hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Create an account
                                    </button>

                                    <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Already have an account?
                                        <Link to="/login" class="text-gray-700 underline">Log in</Link>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </>

    );
}

export default Register;


{/* <section className="register-container">
 
 <div className="register-title"> Sign up </div>   
 <form onSubmit={handleRegister}>
     <FormGroup>
         <Label for="exampleEmail"> Email </Label>
         <Input
         id="exampleEmail"
         name="email"
         placeholder="Email"
         type="email"
         onChange={(e)=>setEmail(e.target.value)}
         />
     </FormGroup>

     <FormGroup>
         <Label for="exampleEmail"> Username </Label>
         <Input
         id="exampleUsername"
         name="username"
         placeholder="Username"
         type="text"
         onChange={(e)=>setUsername(e.target.value)}
         />
     </FormGroup>
 
     <FormGroup>
         <Label for="examplePassword">Password</Label>
         <Input
         id="examplePassword"
         name="password"
         placeholder="Password"
         type="password"
         onChange={(e)=>setPassword(e.target.value)}
         />
     </FormGroup>
     <Button className='btn_submit'>
         Submit
     </Button>
 </form>
</section> */}