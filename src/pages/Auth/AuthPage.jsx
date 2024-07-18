import { useState } from "react";
import LoginForm from "../../components/Auth/LoginForm";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function AuthPage({ setUser }) {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mx-auto w-full flex-col max-w-sm">
        {isNewUser ? (
          <SignUpForm setIsNewUser={setIsNewUser} />
        ) : (
          <LoginForm setUser={setUser} setIsNewUser={setIsNewUser} />
        )}
      </div>
    </div>
  );
}
