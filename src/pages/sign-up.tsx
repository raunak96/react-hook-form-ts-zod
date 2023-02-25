import SignUpForm, { type setServerError } from "@/components/SignUpForm";
import { type FormData } from "@/schema";
import axios, { type AxiosError } from "axios";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useRef } from "react";
import { type ErrorResponse } from "./api/sign-up";

const SignUpPage: NextPage = () => {
	const serverErrorRef = useRef<setServerError>(null);
	const router = useRouter();
	const onSubmit = async ({ email, password }: FormData) => {
		try {
			await axios.post(`/api/sign-up`, {
				email: email,
				password: password,
			});
			router.replace("/");
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const err = error as AxiosError<ErrorResponse>;
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
				serverErrorRef.current?.setErrors((err.response?.data)!.errors);
			} else console.log(error);
		}
	};

	return <SignUpForm onSubmit={onSubmit} ref={serverErrorRef} />;
};
export default SignUpPage;
