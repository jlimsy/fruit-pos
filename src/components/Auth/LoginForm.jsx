import { useForm } from "react-hook-form";
import * as usersService from "../../utilities/users-service";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "../ui/spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginForm({ setUser, setIsNewUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = async (event) => {
    setIsLoading(true);

    try {
      const { email, password } = event;
      const formData = { email, password };

      const user = await usersService.login(formData);
      setUser(user);

      navigate("/orders/new");
    } catch (error) {
      console.log("Unable to login:", error);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        {" "}
        <form onSubmit={handleSubmit(submitData)}>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoComplete="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p>First name is required.</p>}

            <Label className="sr-only" htmlFor="password">
              Password
            </Label>

            <Input
              id="password"
              placeholder="password"
              type="password"
              autoComplete="password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Last name is required.</p>}

            <Button type="submit" disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <p>
          New user? Sign up{" "}
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
