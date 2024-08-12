import { EmailTemplate } from "@/components/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  message: string;
}
export const sendWorkRequest = async (
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
  service: string,
  message: string
) => {
  const { data, error } = await resend.emails.send({
    from: "myportfolio@resend.dev",
    to: "dalasaaboma@gmail.com",
    subject: "Work request from portfolio",
    react: EmailTemplate({
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      service: service,
      message: message,
    }),
  });
};
