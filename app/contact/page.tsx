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
import { useState, useTransition, useEffect } from "react";
import { workRequest } from "@/actions/work-request";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { getExperienceYears } from "@/lib/utils";

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
  const [expYears, setExpYears] = useState(7);

  useEffect(() => {
    setExpYears(getExperienceYears());
  }, []);

  const form = useForm<z.infer<typeof WorkRequestSchema>>({
    resolver: zodResolver(WorkRequestSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof WorkRequestSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      workRequest(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-8 xl:py-12 flex-1"
    >
      <div className="container mx-auto px-6">
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
                className="flex flex-col gap-6 p-8 xl:p-12 bg-[#ffffff08] rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl"
              >
                <h3 className="text-3xl text-accent font-bold">
                  Let&apos;s build something together
                </h3>
                <p className="text-white/70 leading-relaxed">
                  With over {expYears}+ years of software engineering experience delivering industrial AI platforms, enterprise microservices, and full-stack web applications, I bring technical depth and engineering excellence to every project.
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
                            type="email"
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
                            <SelectValue placeholder="Select a service domain" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#1a1a2e] border-white/10 text-white">
                          <SelectGroup>
                            <SelectLabel className="text-accent">Services</SelectLabel>
                            <SelectItem value="Enterprise Web Development">Enterprise Web Development</SelectItem>
                            <SelectItem value="Industrial AI & RAG Engineering">Industrial AI &amp; RAG Engineering</SelectItem>
                            <SelectItem value="High-Throughput Microservices">High-Throughput Microservices</SelectItem>
                            <SelectItem value="IoT & Real-Time Telemetry">IoT &amp; Real-Time Telemetry</SelectItem>
                            <SelectItem value="Architecture & Codebase Consultation">Architecture &amp; Codebase Consultation</SelectItem>
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
                          className="h-[180px] bg-[#ffffff05] border-white/10 hover:border-white/20 focus:border-accent/50"
                          placeholder="Tell me about your project, timeline, or engineering goals..."
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
                  className="w-full xl:w-auto px-8 py-6 bg-gradient-to-r from-accent to-[#4f46e5] hover:from-accent/90 hover:to-[#4f46e5]/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30 text-primary font-semibold"
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
            <ul className="flex flex-col gap-6 w-full">
              {info.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-6 p-6 bg-[#ffffff08] rounded-xl border border-white/10 hover:border-accent/30 transition-all"
                >
                  <div className="w-14 h-14 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{item.title}</p>
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-accent transition-colors truncate block"
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
