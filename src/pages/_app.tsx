import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Advanced react-hook-form-zod</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
