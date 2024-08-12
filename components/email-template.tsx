import * as React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface EmailTemplateProps {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  firstName,
  lastName,
  phone,
  service,
  message,
}) => (
  <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
    <span className="text-xl">
      Hey Dalasa, my name is {firstName + " " + lastName}. {message}
    </span>
    <ul className="flex flex-col gap-10">
      <li className="flex items-center gap-6">
        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
          <div className="text-[28px]">
            <FaPhoneAlt />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-white/60">Phone</p>
          <h3 className="text-xl">{phone}</h3>
        </div>
      </li>

      <li className="flex items-center gap-6">
        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
          <div className="text-[28px]">
            <FaEnvelope />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-white/60">Email</p>
          <h3 className="text-xl">{email}</h3>
        </div>
      </li>

      <li className="flex items-center gap-6">
        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
          <div className="text-[28px]">
            <FaPhoneAlt />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-white/60">Service</p>
          <h3 className="text-xl">{service}</h3>
        </div>
      </li>
    </ul>
  </div>
);
