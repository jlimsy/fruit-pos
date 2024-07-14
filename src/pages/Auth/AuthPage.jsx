import { useState } from "react";
import LoginForm from "../../components/Auth/LoginForm";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function AuthPage({ setUser }) {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {isNewUser ? (
          <SignUpForm setIsNewUser={setIsNewUser} />
        ) : (
          <LoginForm setUser={setUser} setIsNewUser={setIsNewUser} />
        )}
      </div>
    </div>
  );
}
