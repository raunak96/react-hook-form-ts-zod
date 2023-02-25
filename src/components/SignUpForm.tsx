import TextField from "./TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FormData, signUpSchema } from "@/schema";
import { type FC } from "react";

type Props = {
	onSubmit: (data: FormData) => void;
};
const SignUpForm: FC<Props> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(signUpSchema),
	});

	return (
		<form
			className="h-screen w-screen flex flex-col gap-4 items-center justify-center"
			onSubmit={handleSubmit(onSubmit)}>
			<h2>SignUp Form</h2>

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
export default SignUpForm;
