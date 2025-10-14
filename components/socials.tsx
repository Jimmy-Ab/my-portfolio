import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Jimmy-Ab?tab=repositories" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/dalasa-aboma-415344111/" },
  { icon: <FaTwitter />, path: "https://x.com/JxmmiAb" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/jxmmiab/" },
  { icon: <FaTelegram />, path: "https://t.me/Jxmmiab" },
];
const Socials = () => {
  return (
    <div className="flex gap-6">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
