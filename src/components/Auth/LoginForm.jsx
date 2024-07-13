import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      LoginForm
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("email", { required: true })} />
        {errors.email && <p>First name is required.</p>}

        <input {...register("password", { required: true })} />
        {errors.password && <p>Last name is required.</p>}

        <input type="submit" />
      </form>
    </div>
  );
}
