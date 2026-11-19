import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(60, { message: "Name cannot exceed 60 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  category: z.enum(["Partnership", "Licensing", "Business", "General"], {
    errorMap: () => ({ message: "Please select a valid subject category." }),
  }),
  creatorHandle: z
    .string()
    .max(50, { message: "Handle cannot exceed 50 characters." })
    .optional(),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(120, { message: "Subject cannot exceed 120 characters." }),
  message: z
    .string()
    .min(15, { message: "Please provide detailed details (at least 15 characters)." })
    .max(2500, { message: "Message cannot exceed 2,500 characters." }),
  honeypot: z.string().max(0, { message: "Spam detected." }).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
