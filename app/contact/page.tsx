"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WorkRequestSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { workRequest } from "@/actions/work-request";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+251-941-771-978",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "dalasaaboma@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Addis Ababa, Ethiopia",
  },
];
const Contact = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof WorkRequestSchema>>({
    resolver: zodResolver(WorkRequestSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      service: "Web Development",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof WorkRequestSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      workRequest(values)
      .then((data) => {
        if(data?.error){
          setError(data.error);
        }
        if(data?.success){
          form.reset();
          setSuccess(data?.success);
        }
      })
      .catch(() => {
        setError("An error occurred, please try again!");
      })
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              >
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60 ">
                  I&apos;m always eager to collaborate with like-minded
                  individuals and organizations on innovative projects. With
                  over five years of software development experience, I bring a
                  mix of technical skills and creative thinking to every
                  project. Whether you have a unique idea or need technical
                  expertise, feel free to reach out, and let’s bring your vision
                  to life together!
                </p>

                {/*inputs*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl className="w-full">
                          <Input
                            {...field}
                            placeholder="First Name"
                            disabled={isPending}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl className="w-full">
                          <Input
                            {...field}
                            placeholder="Last Name"
                            disabled={isPending}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl className="w-full">
                          <Input
                            {...field}
                            placeholder="Email Address"
                            disabled={isPending}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl className="w-full">
                          <Input
                            {...field}
                            placeholder="Phone Number"
                            disabled={isPending}
                          ></Input>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/*select*/}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem disabled value="cst">UI/UX Design</SelectItem>
                      <SelectItem disabled value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/*text area*/}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl className="w-full">
                          <Textarea
                            {...field}
                            className="h-[200px]"
                            placeholder="Type your message here."
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormError message={error} />
                  <FormSuccess message={success} />

                {/*button*/}
                <Button
                  size="md"
                  className="max-w-40"
                  type="submit"
                  disabled={isPending}
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
