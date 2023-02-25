import { z } from "zod";

export const signUpSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(6).max(24),
		confirmPassword: z.string().min(6).max(24),
	})
	.refine(formData => formData.password === formData.confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"],
	});

export type FormData = z.infer<typeof signUpSchema>;
