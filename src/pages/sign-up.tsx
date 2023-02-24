import TextField from "@/components/TextField";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(24),
	confirmPassword: z.string().min(6).max(24),
});
export type FormData = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = (data: FormData) => {
		console.log("onSubmit", data);
	};

	return (
		<form
			className="h-screen w-screen flex flex-col gap-4 items-center justify-center"
			onSubmit={handleSubmit(onSubmit)}>
			<TextField
				id="email"
				label="email"
				inputProps={register("email")}
				errors={errors}
				name="email"
			/>
			<TextField
				id="password"
				label="password"
				type="password"
				inputProps={register("password")}
				errors={errors}
				name="password"
			/>
			<TextField
				id="confirmPassword"
				label="confirm-password"
				type="password"
				inputProps={register("confirmPassword")}
				errors={errors}
				name="confirmPassword"
			/>

			<button type="submit" className="btn">
				Submit
			</button>
		</form>
	);
};
export default SignUpPage;
