import React, { Component, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {convertFromRaw, EditorState} from "draft-js";
import Header from "../Header/Header";

import { Dropdown} from 'reactstrap';

    
 const Messenger  = () => {

        return(
        <>
            <header className='sidebar'>
                <Header/>
            </header>

            <h1>MASSAGE page</h1>
           
            
        </>
        )
     
    }


 
export default Messenger;