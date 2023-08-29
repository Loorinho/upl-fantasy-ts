import {z} from 'zod';

export const UserSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(6),

}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export const LoginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8,"Enter your password"),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>


export const ManagerSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    age: z.number().positive("Age cannot be negative").min(18,"Manager age must be greater than 18"),
    team: z.number("Enter a valid team")
})

export type ManagerSchemaType = z.infer<typeof ManagerSchema>


