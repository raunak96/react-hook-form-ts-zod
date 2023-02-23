import TextField from "@/components/TextField";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InputFields>();

	const onSubmit = (data: InputFields) => {
		console.log("onSubmit", data);
	};

	return (
		<form
			className="h-screen w-screen flex flex-col gap-4 items-center justify-center"
			onSubmit={handleSubmit(onSubmit)}>
			<TextField
				id="email"
				label="email"
				inputProps={register("email", {
					required: "Email is required",
				})}
				errors={errors}
				name="email"
			/>
			<TextField
				id="password"
				label="password"
				type="password"
				inputProps={register("password", {
					required: "Password is required",
				})}
				errors={errors}
				name="password"
			/>
			<TextField
				id="confirmPassword"
				label="confirm-password"
				type="password"
				inputProps={register("confirmPassword", {
					required: "Confirm Password is required",
				})}
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
