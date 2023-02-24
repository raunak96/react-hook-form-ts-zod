## React Hook Form with [Zod](https://github.com/colinhacks/zod) Resolver Validation

- For Zod Integration with react-hook-form, see [signUp Page](src/pages/sign-up.tsx#L6).

### Adding Custom validation to Zod Schema
- Zod comes built in with many validations like email, min-max length etc.
- For `custom validation`, we use [refine](https://github.com/colinhacks/zod#refine) method provided by zod. See [signUp Page](src/pages/sign-up.tsx#L12).