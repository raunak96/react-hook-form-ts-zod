import { type FormData } from "@/schema";
import { type FC } from "react";
import { Input } from "react-daisyui";
import {
	type FieldErrorsImpl,
	type UseFormRegisterReturn,
} from "react-hook-form";

type Props = {
	label: string;
	id: string;
	name: keyof FormData;
	type?: "password" | "email" | "text";
	errors: Partial<FieldErrorsImpl<FormData>>;
	inputProps: UseFormRegisterReturn<string>;
};
const TextField: FC<Props> = ({
	id,
	label,
	type = "text",
	errors,
	inputProps,
	name,
}) => {
	return (
		<div className="form-control w-full max-w-xs">
			<label htmlFor={id} className="label">
				<span className="label-text capitalize">{label}</span>
			</label>
			<Input color="ghost" id={id} type={type} {...(inputProps ?? {})} />
			{errors?.[name]?.message && (
				<span className="label-text text-error">
					{errors?.[name]?.message}
				</span>
			)}
		</div>
	);
};
export default TextField;
