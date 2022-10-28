import Header from "../Header/Header";
import React, { useState } from "react";
import axios from "axios";
import "./diary.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DiaryForm = () => {

    const url = process.env.REACT_APP_URL_AXIOS;
    const navigate = useNavigate()

    const[title,setTitle] = useState('');
    const[content,setContent] = useState('');
    const[diaryFile,setDiaryFile] = useState({});
    const user = useSelector((state) => state.auth.login.currentUser);

    const submitDiary = async(e)=>{
        const token = localStorage.getItem('jwtLogin')

        console.log(diaryFile);
        e.preventDefault();
        try {
            const res = await axios.post(url + '/diary/uploadDiary',{                
                diaryTitle:title,
                diaryContent:content,
                diaryImage:diaryFile
            },
            {
                headers:{
                    "Content-Type":"multipart/form-data",
                    token:`Bearer ${token}`,
                    accept: 'application/json'
                }
            }
            ); 
            console.log(res);

        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <>
            <header className='sidebar'>
                <Header />
            </header>
            
            <main>
                <section>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="mt-5 ml-20 md:col-span-2 md:mt-0">
                            <form onSubmit={(e)=>submitDiary(e)}>
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Your Diary Today</label>
                                            <div className="mt-1 flex items-center">
                                                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </span>
                                                <span className="ml-3">
                                                    {user.username}
                                                </span>
                                            </div>
                                        </div>
                                       
                                            <label for="UserEmail" className="flex text-sm font-medium text-gray-700">
                                                Title
                                            </label>

                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="set a title for today"
                                                onChange={(e)=>setTitle(e.target.value)}
                                                />

                                        <label htmlFor="about" className="flex text-sm font-medium text-gray-700">
                                            Content
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="How about you today"
                                                onChange={(e) => setContent(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Your Picture</label>
                                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div className="space-y-1 text-center">
                                                    
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
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
                                                            <span>Upload a file</span>
                                                            <input id="file-upload"
                                                                name="file-upload"
                                                                type="file" className="sr-only"
                                                                onChange={(e)=>setDiaryFile(e.target.files[0])}
                                                            />

                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>
            </main>
            <footer>
                <span>
                    "Yesterday is history. Tomorrow is a mystery, but today is a gift. That’s why it’s called the present"
                </span>
            </footer>
        </>
     );
}
 
export default DiaryForm;


// <Form onSubmit={(e)=>submitDiary(e)}>
//                             <FormGroup className="mb-3-header">
//                                 <Label for="exampleEmail" className="form-label-header">
//                                     Your Diary Today
//                                 </Label>
//                                 <FormText className="form-text-header">
//                                     (Preserve your most memorable memories)
//                                 </FormText>
//                             </FormGroup>

//                             <FormGroup className="mb-3-middle">
//                                 <Label for="exampleDate" className="form-label-middle">
//                                     Title
//                                 </Label>
//                                 <Input
//                                 id="exampleDate"
//                                 name="date"
//                                 placeholder="A title for today"
//                                 type="text"
//                                 onChange={(e)=>setTitle(e.target.value)}
//                                 />
//                             </FormGroup>

//                             <FormGroup >
//                                 <Label for="exampleText">
//                                     How about you today
//                                 </Label>
//                                 <Input
//                                 id="exampleText"
//                                 name="text"
//                                 type="textarea"
//                                 onChange={(e)=>setContent(e.target.value)}
//                                 />
//                             </FormGroup>
                            
//                             <FormGroup>
//                                 <Label for="exampleFile">
//                                     Any picture which you want to Store
//                                 </Label>
//                                 <Input
//                                 id="exampleFile"
//                                 name="file"
//                                 type="file"
//                                 onChange={(e)=>setDiaryFile(e.target.files[0])}
//                                 />
//                             </FormGroup>
//                             <Button  color="primary" >
//                                 Submit
//                             </Button>
//                         </Form>