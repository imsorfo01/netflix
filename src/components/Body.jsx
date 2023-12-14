import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import {  onAuthStateChanged } from "firebase/auth";
// import { auth } from './utility/firebase';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addUser, removeUser } from './utility/userSlice';

export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
