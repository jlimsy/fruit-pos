import { useForm } from "react-hook-form";
import * as usersService from "../../utilities/users-service";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "../ui/spinner";
import { useState } from "react";

export default function SignUpForm({ setIsNewUser }) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = async (event) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    try {
      const { name, email, password } = event;
      const formData = { name, email, password };

      const user = await usersService.signUp(formData);
    } catch (error) {
      console.log("Unable to sign up:", error);
    }
  };

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="grid gap-2">
          <Label className="sr-only" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            placeholder="username"
            {...register("name", { required: true })}
          />

          {errors.name && <p>Name is required.</p>}

          <Label className="sr-only" htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            {...register("email", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              required: true,
            })}
          />
          {errors.email && <p>Please enter a valid e-mail address.</p>}

          <Input
            id="password"
            placeholder="password"
            type="password"
            autoComplete="password"
            {...register("password", { pattern: /\d+/ })}
          />
          {errors.password && (
            <p>Please ensure your password contains at least 6 characters.</p>
          )}

          <Input
            id="confirm"
            placeholder="confirm password"
            type="password"
            autoComplete="password"
            {...register("confirm", { pattern: /\d+/ })}
          />
          {errors.confirm && <p>Passwords do not match.</p>}

          <Button type="submit" disabled={isLoading}>
            {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>
        </div>
      </form>
      <p>
        Already have an account? Login{" "}
        <span
          className="underline"
          onClick={() => setIsNewUser((prev) => !prev)}
        >
          here
        </span>
        .
      </p>
    </div>
  );
}
