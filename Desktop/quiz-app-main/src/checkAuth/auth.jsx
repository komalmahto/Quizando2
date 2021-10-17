import React, { useEffect } from "react";
import { auth } from "../Actions/user_actions";
import { useSelector, useDispatch } from "react-redux";

export default function foo(ComposedClass, reload, adminRoute = null) {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    //const dispatch = useDispatch();
    console.log(user);
    let userToken;
    useEffect(() => {
      userToken = JSON.parse(localStorage.getItem("user")) || null;
      console.log(userToken);
      if (userToken != null && user) {
        props.history.push("/playQuiz");
      } else {
        props.history.push("/login");
      }
      // dispatch(auth()).then(async (response) => {
      //   if ((await response.payload.statusCode) === 401) {
      //     console.log("aya yaha");
      //     if (reload) {
      //       props.history.push("/login");
      //     }
      //   } else {
      //     if (adminRoute && response.payload.statusCode === 401) {
      //       props.history.push("/login");
      //     } else {
      //       if (reload === false) {
      //         props.history.push("/login");
      //       }
      //     }
      //   }
      // });
    }, [props.history, user.googleAuth]);

    return <ComposedClass {...props} user={user} token={userToken} />;
  }
  return AuthenticationCheck;
}
