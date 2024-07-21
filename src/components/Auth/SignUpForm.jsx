import { useForm } from "react-hook-form";
import * as usersService from "../../utilities/users-service";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import debug from "debug";
const log = debug("components:SignUpForm");

export default function SignUpForm({ setIsNewUser }) {
  const [isLoading, setIsLoading] = useState(false);

  log("setIsNewUser %o", setIsNewUser);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const submitData = async (event) => {
    setIsLoading(true);

    try {
      const { name, email, password } = event;
      const formData = { name, email, password };
      log("formData %o", formData);

      const userExists = await usersService.checkUserExists(email);
      log("userExists %o", userExists);

      if (userExists) {
        setError("email", {
          type: "manual",
          message: "Account already exists.",
        });
        setIsLoading(false);
        return;
      } else {
        await usersService.signUp(formData);
        setIsNewUser(false);
      }
    } catch (error) {
      console.log("Unable to sign up:", error);
    }

    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(submitData)}>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="username"
              {...register("name", { required: "Name is required." })}
            />

            {errors.name && (
              <p className="text-sm text-destructive pl-3">
                {errors.name.message}
              </p>
            )}

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
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid e-mail address",
                },
                required: true,
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive pl-3">
                {errors.email.message}
              </p>
            )}

            <Input
              id="password"
              placeholder="password"
              type="password"
              autoComplete="password"
              {...register("password", {
                pattern: /\d+/,
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-destructive pl-3">
                {errors.password.message}
              </p>
            )}

            <Input
              id="confirm"
              placeholder="confirm password"
              type="password"
              autoComplete="password"
              {...register("confirm", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match.",
              })}
            />
            {errors.confirm && (
              <p className="text-sm text-destructive pl-3">
                {errors.confirm.message}
              </p>
            )}

            <Button type="submit" disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
              Sign Up
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </Card>
  );
}
