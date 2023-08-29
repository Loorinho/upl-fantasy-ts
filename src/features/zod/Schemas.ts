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
    team: z.number().positive("Enter a valid team")
})

export type ManagerSchemaType = z.infer<typeof ManagerSchema>

export const PlayerSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters long"),
    lastName: z.string().min(2, "Last name must be at least 2 characters long"),
    age: z.number().positive("Age cannot be negative").min(18,"Manager age must be greater than 18"),
    shirtNumber: z.number().positive("Shirt number cannot be negative"),
    position: z.enum([
      "Center Forward",
      "Defensive Midfielder",
      "Attacking Midfielder",
      "Goal Keeper",
      "Left Back",
      "Right Back",
      "Left Winger",
      "Right Winger",
      "Left Center Back",
      "Right Center Back",
    ]),
    foot: z.enum(["Left", "Right", "Both"]),    
    team: z.number().min(3,"Enter a valid team")
})

export type PlayerSchemaType = z.infer<typeof PlayerSchema>


export const TeamSchema = z.object({
    name: z.string().min(3, "Team name cannot be less than 2 characters"),
    name: z.string().min(3, "Team city cannot be less than 2 characters"),
})

export type TeamSchemaType = z.infer<typeof TeamSchema>



