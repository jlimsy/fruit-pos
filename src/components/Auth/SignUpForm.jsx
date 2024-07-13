import { useForm } from "react-hook-form";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = async (event) => {
    try {
      const { username, email, password } = event;
      const formData = { username, email, password };

      const user = await signUp(formData);

      console.log(event);
    } catch (error) {
      console.log("Unable to sign up:", error);
    }
  };

  return (
    <div>
      SignUpForm
      <form onSubmit={handleSubmit(submitData)}>
        <input {...register("username", { required: true })} />
        {errors.username && <p>Username is required.</p>}

        <input
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            required: true,
          })}
        />
        {errors.email && <p>Please enter a valid e-mail address.</p>}

        <input {...register("password", { pattern: /\d+/ })} />
        {errors.password && (
          <p>Please ensure your password contains at least 6 characters.</p>
        )}

        <input {...register("confirm", { pattern: /\d+/ })} />
        {errors.confirm && <p>Passwords do not match.</p>}

        <input type="submit" />
      </form>
    </div>
  );
}
