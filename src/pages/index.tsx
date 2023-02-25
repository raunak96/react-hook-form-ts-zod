import { type NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
	return (
		<div>
			Hello World.
			<Link href="/sign-up">Sign Up</Link>
		</div>
	);
};
export default HomePage;
