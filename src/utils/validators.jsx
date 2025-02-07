import {z } from "zod";

export const registerSchema = z.object({
    email: z.string().email("Email ไม่ถูกต้อง"),
    firstname: z.string().min(3, "Firstname ต้องมากกว่า 3 "),
    lastname: z.string().min(3, "Lastname ต้องมากกว่า 3 "),
    password: z.string().min(6, "Password ต้องมากกว่า 6 "),
    confirmpassword: z.string().min(6, "confirmPassword ต้องมากกว่า 6 "),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "password incorrect",
    path: ["confirmPassword"],
  });