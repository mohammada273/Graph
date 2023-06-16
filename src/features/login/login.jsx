import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toast } from "react-toastify";
import { loginSubmitWithSaga } from "./actions";
import { selectPersistToken } from "../shares/shareReducer";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const token = useAppSelector(selectPersistToken);

  const [userInfo, setUserInfo] = useState({ username: "", password: ""});


  function sendData(e, userInfo){
    e.preventDefault();

    if(userInfo.username.length === 0 || userInfo.password.length === 0 ){
      toast.error("نام کاربری و یا کلمه عبور خالی میباشد");
    }
    else {
      dispatch(loginSubmitWithSaga(userInfo));
    }
  }

  useEffect(()=>{
    if(token.length !== 0){
      return navigate("/");
    }
  },[token, navigate])

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg border-solid rounded-md border-2 border-blue-300">
          <form>
            <div className="mt-4">
              <div>
                <span className="block">Username</span>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, username: e.target.value })
                  }
                />
              </div>
              <div className="mt-4">
                <span className="block">Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
              </div>
              <div className="flex">
                <button
                  className="flex-grow px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={(e) => sendData(e, userInfo)}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
