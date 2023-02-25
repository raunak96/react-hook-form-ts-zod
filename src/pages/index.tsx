import { type NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
	return (
		<div className="flex flex-col h-screen justify-center items-center space-y-5">
			<h1 className="text-lg">Advanced Form @react-hook-form & Zod</h1>
			<Link href="/sign-up" className="link link-hover link-accent">
				Sign Up
			</Link>
		</div>
	);
};
export default HomePage;
