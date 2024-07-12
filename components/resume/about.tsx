"use client";

const about = {
  title: "About me",
  description:
    "I am a passionate software developer with a strong background in technology and innovation. Here, you’ll learn more about my professional journey, interests, and aspirations.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dalasa Aboma",
    },
    {
      fieldName: "Phone",
      fieldValue: "+251-94-1771-978",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "dalasa.live.skype.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Ethiopian",
    },
    {
      fieldName: "Email",
      fieldValue: "dalasaaboma@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Amharic, Afan Oromo",
    },
  ],
};

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        {about.info.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-white/60">{item.fieldName}</span>
              <span className="text-accent text-center font-black">·</span>
              <span
                className={`${
                  item.fieldValue === "Available" && "text-accent font-semibold"
                } text-lg`}
              >
                {item.fieldValue}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutMe;
