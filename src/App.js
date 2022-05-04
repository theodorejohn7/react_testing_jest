import React from "react";

import { Route, Routes } from "react-router-dom";
import Welcome from "./components/login_form/Welcome";
import MainHeader from "./components/MainHeader";
import Login from "./components/login_form/Login";
import Register from "./components/login_form/Register";
import Test from "./components/test";
import TodoApp from "./components/TodoApp";
import UseContextApp from "./components/UseContextApp";
import UseContextApp2 from "./components/UseContextApp2";
import ApiApp from "./components/ApiApp";
import DataFetching from "./components/DataFetching";
import HOCApp from "./components/HOCApp";
import EventApp from "./components/EventApp";
 import FileUploadApp from "./components/FileUploadApp";


export default class App extends React.Component {
  render() {
    return (
      <div>
        
        <header>
          <MainHeader />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/test" element={<Test />} />
            <Route path="/todoapp" element={<TodoApp />} />
            <Route path="/usecontextapp" element={<> <UseContextApp /> <UseContextApp2 /> </>} />
            
            <Route path="/usereducerapi" element={<ApiApp />} />
            <Route path="/datafetching" element={<DataFetching />} />
            <Route path="/hocapp" element={<HOCApp />} />
            <Route path="/eventbubblingapp" element={<EventApp />} />
            <Route path="/fileuploadapp" element={<FileUploadApp />} />

         
          
          </Routes>
       
        </main>
      </div>
    );
  }
}
