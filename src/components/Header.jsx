import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./utility/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utility/userSlice";
import { logo, selectLang, signOutLogo, userIcon } from "./utility/constant";
import { toggleGptPageState } from "./utility/gptSlice";
import { changeLangFunction } from "./utility/langConfig";


export default function Header() {
  
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptDispatch= useDispatch()
  const showGpt = useSelector(store=>store.gpt.gptPageState)



  const handleLangChange=(e)=>{
    dispatch(changeLangFunction(e.target.value))
  }
  const toggleGpt=()=>{
    gptDispatch(toggleGptPageState())
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, uid, providerData } = user;
        dispatch(
          addUser({ email: email, uid: uid, providerData: providerData })
        );
        // console.log(email,uid,providerData);
        // ...
        navigate("/browse");
        // console.log("this");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // we should unsubcribe to this event when unmount of the component takes place so that we canreduce our app overload
    return () => unsubscribe()
  }, []);

  return (
    <div>
      {!user && (
        <div className="absolute z-10 bg-gradient-to-b from-black mr-2">
          <img
            className="w-32  "
            src={logo}
            alt="logo"
          />
        </div>
      )}
      {user && (
        <div className="md:flex flex-col md:flex-row items-center md:p-1 md:justify-between md:w-screen md:h-12  md:bg-gradient-to-b bg-gradient-to-b md:from-black from-black ">
          <div>
            <img
              className="md:w-32 w-32 mx-auto "
              src={logo}
              alt="logo"
            />   
          </div>
          <div className="md:flex flex justify-center md:mr-6 md:mb-0 mb-2 ">
            {showGpt && <select className="outline-none bg-gray-950 text-white px-2 text-xs rounded-lg" onChange={handleLangChange}>
             {selectLang.map((lang)=> 
              <option key={lang.langIdentifier} value={lang.langIdentifier}>{lang.langName}</option>)}
              
            </select>}
            <button onClick={toggleGpt} className="px-2 mx-2 rounded-lg bg-gray-950 text-white ">{showGpt?"< Prev Page":"Search GPT"}</button>
            <img
              className="h-9 mr-3 rounded-3xl"
              src={userIcon}
              alt="userIcon"
            />
            <button onClick={handleSignOut}>
              <img
                className="h-9 rounded-md"
                src={signOutLogo}
                alt="signOut"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
