import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Imię musi mieć co najmniej 3 znaki" })
    .regex(/^[a-zA-Z]+$/, { message: "Imię może zawierać tylko litery" }),
  surname: z
    .string()
    .min(3, { message: "Nazwisko musi mieć co najmniej 3 znaki" })
    .regex(/^[a-zA-Z]+$/, { message: "Nazwisko może zawierać tylko litery" }),
  email: z
    .string()
    .email({ message: "Niepoprawny adres email" }),
  password: z
    .string()
    .min(8, { message: "Hasło musi mieć co najmniej 8 znaków" })
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, { message: "Hasło musi zawierać co najmniej jedną cyfrę i jeden znak specjalny" }),
  password2: z
    .string(),
  age: z
    .number()
    .min(18, { message: "Musisz mieć co najmniej 18 lat" })
    .max(99, { message: "Nie możesz mieć więcej niż 100 lat" }),
  birthdate: z
    .date()
    .refine((data) => {
      const age = new Date().getFullYear() - data.getFullYear();
      return age >= 18 && age <= 99;
    }, { message: "Musisz mieć co najmniej 18 lat" }),
  country: z
    .string()
    .min(1, { message: "Musisz wybrać kraj" }),
  gender: z
    .string()
    .optional(),
  marketing: z
    .boolean(),
  statute: z
    .boolean()
    .refine((data) => data === true, { message: "Musisz zaakceptować regulamin" }),
})
.refine((data) => data.password === data.password2, { message: "Hasła muszą być takie same", path: ["password2"] });

export type formType = z.infer<typeof formSchema>;