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
    href: "tel:+251941771978"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "dalasaaboma@gmail.com",
    href: "mailto:dalasaaboma@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Addis Ababa, Ethiopia",
    href: "https://maps.google.com/?q=Addis+Ababa,+Ethiopia"
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
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 xl:py-14 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#4f46e5]/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Let's discuss how I can help bring your project to life
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="xl:w-[60%]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 p-8 xl:p-12 bg-[#ffffff08] rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-3xl text-accent font-bold">
                  Let&apos;s work together
                </h3>
                <p className="text-white/70">
                  I&apos;m always eager to collaborate with like-minded
                  individuals and organizations on innovative projects. With
                  over five years of software development experience, I bring a
                  mix of technical skills and creative thinking to every
                  project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="First Name"
                            disabled={isPending}
                            className="bg-[#ffffff05] border-white/10 hover:border-white/20 focus:border-accent/50"
                          />
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
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Last Name"
                            disabled={isPending}
                            className="bg-[#ffffff05] border-white/10 hover:border-white/20 focus:border-accent/50"
                          />
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
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Email Address"
                            disabled={isPending}
                            className="bg-[#ffffff05] border-white/10 hover:border-white/20 focus:border-accent/50"
                          />
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
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Phone Number"
                            disabled={isPending}
                            className="bg-[#ffffff05] border-white/10 hover:border-white/20 focus:border-accent/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-[#ffffff05] border-white/10 hover:border-white/20 focus:border-accent/50">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#1a1a2e] border-white/10">
                          <SelectGroup>
                            <SelectLabel>Services</SelectLabel>
                            <SelectItem value="Web Development">Web Development</SelectItem>
                            <SelectItem disabled value="UI/UX Design">UI/UX Design</SelectItem>
                            <SelectItem disabled value="Logo Design">Logo Design</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="h-[200px] bg-[#ffffff05] border-white/10 hover:border-white/20 focus:border-accent/50"
                          placeholder="Tell me about your project..."
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormError message={error} />
                <FormSuccess message={success} />

                <Button
                  size="lg"
                  className="w-full xl:w-auto px-8 py-6 bg-gradient-to-r from-accent to-[#4f46e5] hover:from-accent/90 hover:to-[#4f46e5]/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="xl:w-[40%] flex items-center xl:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul className="flex flex-col gap-8 w-full">
              {info.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-6 p-6 bg-[#ffffff08] rounded-xl border border-white/10 hover:border-accent/30 transition-all"
                >
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-medium hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;