import React, { useState } from "react"
import SignUpScreen from "./SignUpScreen"

import "./LoginScreen.css"

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
          alt="login logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>WATCH TV SHOWS AND MOVIES ANYWHERE. ANYTIME.</h1>
            <h2>Watch anywhere. Cancel at anytime.</h2>
            <h3>
              Ready to watch? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Libero, ut.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginScreen
