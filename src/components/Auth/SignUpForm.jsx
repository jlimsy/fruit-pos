import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      SignUpForm
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName", { required: true })} />
        {errors.lastName && <p>First name is required.</p>}

        <input {...register("lastName", { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}

        <input {...register("email", { pattern: /\d+/ })} />
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
