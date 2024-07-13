import LoginForm from "../../components/Auth/LoginForm";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function AuthPage() {
  return (
    <div>
      <SignUpForm />
      <LoginForm />
    </div>
  );
}
