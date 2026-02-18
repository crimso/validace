import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(4, "Name is required"),
  lastName: z.string().min(4, "Too short"),
});

type Inputs = z.infer<typeof schema>;

export function NewUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
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
        <p>{errors.firstName?.message}</p>

        <input
          placeholder="Surname"
          {...register("lastName", { required: true })}
        />
        <p>{errors.lastName?.message}</p>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
