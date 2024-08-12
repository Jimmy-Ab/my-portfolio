import * as z from "zod";

export const WorkRequestSchema = z.object({
  email: z.string().email({
    message: "Email is required!",
  }),
  firstName: z.string({
    message: "First name is required!",
  }),

  lastName: z.string({
    message: "Last name is required!",
  }),

  phone: z.string({
    message: "Phone Number is required!",
  }),

  service: z.z.string({
    message: "Service type is required!",
  }),
  
  message: z.string({
    message: "Message is required!",
  }),
});
