import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

export function UserForm() {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      firstName: "Pedro",
      lastName: "Gonzales",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>UseForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("firstName", { required: true })}
        />
        <input
          placeholder="Surname"
          {...register("lastName", { required: true })}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
