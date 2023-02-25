import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
	success: boolean;
	errors?: Record<string, string>;
};

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
	switch (req.method) {
		case "POST":
			const data = req.body as Record<string, string>;
			await new Promise(resolve => setTimeout(resolve, 1000));
			if (data.email === "bob@gmail.com") {
				return res.status(500).json({
					success: false,
					errors: {
						email: "email not available",
					},
				});
			}
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
