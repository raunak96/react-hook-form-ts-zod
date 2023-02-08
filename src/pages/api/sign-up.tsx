import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
	success: boolean;
	errors?: Record<string, string>;
};

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
	switch (req.method) {
		case "POST":
			const { email } = req.body as Record<string, string>;

			if (email === "bob@gmail.com") {
				await new Promise(resolve => setTimeout(resolve, 1000));
				return res.status(500).json({
					success: false,
					errors: {
						email: "email not available",
					},
				});
			}

			await new Promise(resolve => setTimeout(resolve, 1000));
			return res.status(200).json({
				success: true,
			});
		default:
			return res.status(405).json({
				success: false,
				errors: {
					message: `${req.method} Method not allowed`,
				},
			});
	}
};
