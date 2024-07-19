import { useState } from "react";
import LoginForm from "../../components/Auth/LoginForm";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function AuthPage({ setUser }) {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 flex items-center justify-center min-h-screen bg-gray-100">
        <div className="mx-auto w-full max-w-sm">
          {isNewUser ? (
            <SignUpForm setIsNewUser={setIsNewUser} />
          ) : (
            <LoginForm setUser={setUser} setIsNewUser={setIsNewUser} />
          )}
        </div>
      </div>
      <div className="col-span-2 bg-[url('/public/fruit.jpg')] bg-cover bg-bottom"></div>
    </div>
  );
}
