"use server";

import { sendWorkRequest } from "@/lib/mail";
import { WorkRequestSchema } from "@/schemas";
import * as z from "zod";

export const workRequest = async (
  values: z.infer<typeof WorkRequestSchema>
) => {
    const validatedFields = WorkRequestSchema.safeParse(values);

    if(!validatedFields.success){
        return {error: "Invalid field"};
    }

    const {email, firstName, lastName, phone, service, message } = validatedFields.data;

    await sendWorkRequest(email, firstName, lastName, phone, service, message);

    return {success: "Request sent successfully"};
};
