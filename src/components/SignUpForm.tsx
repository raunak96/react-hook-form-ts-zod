import TextField from "./TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FormData, signUpSchema } from "@/schema";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "react-daisyui";

type Props = {
	onSubmit: (data: FormData) => Promise<void>;
};
export type setServerError = {
	setErrors: (errors: Record<string, string>) => void;
};

const SignUpForm = forwardRef<setServerError, Props>(({ onSubmit }, ref) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormData>({
		resolver: zodResolver(signUpSchema),
	});

	const setServerErrorRef = useRef(setError);

	useImperativeHandle(
		ref,
		() => {
			return {
				setErrors: (errors: Record<string, string>) => {
					Object.entries(errors).forEach(([key, value]) => {
						setServerErrorRef.current(key as keyof FormData, {
							message: value,
						});
					});
				},
			};
		},
		[]
	);

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

			<Button type="submit" color="primary" disabled={isSubmitting}>
				{isSubmitting ? "Submitting" : "Submit"}
			</Button>
		</form>
	);
});

SignUpForm.displayName = "SignUpForm";

export default SignUpForm;
