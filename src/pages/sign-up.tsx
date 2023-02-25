import SignUpForm from "@/components/SignUpForm";
import { type FormData } from "@/schema";
import axios from "axios";
import { type NextPage } from "next";

const SignUpPage: NextPage = () => {
	const onSubmit = async ({ email, password }: FormData) => {
		try {
			const { data } = await axios.post(`/api/sign-up`, {
				email: email,
				password: password,
			});
			console.log(data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data);
			} else console.log(error);
		}
	};

	return <SignUpForm onSubmit={onSubmit} />;
};
export default SignUpPage;
