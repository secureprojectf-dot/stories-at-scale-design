
"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

export const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const y1 = useTransform(scrollYProgress, [0, 1], [200, -100]);

  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const x3 = useTransform(scrollYProgress, [0, 1], [300, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 200]);

  const y4 = useTransform(scrollYProgress, [0, 1], [50, 200]);

  const x5 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [250, -50]);

  const x6 = useTransform(scrollYProgress, [0, 1], [-400, 200]);

  const x7 = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y7 = useTransform(scrollYProgress, [0, 1], [200, 200]);

  const x8 = useTransform(scrollYProgress, [0, 1], [-100, 10]);
  const y8 = useTransform(scrollYProgress, [0, 1], [100, 200]);

  const x9 = useTransform(scrollYProgress, [0, 1], [100, 200]);
  const y9 = useTransform(scrollYProgress, [0, 1], [-200, 100]);

  const r1 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const r2 = useTransform(scrollYProgress, [0, 1], [-60, 10]);
  const r3 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const r4 = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const r5 = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const r6 = useTransform(scrollYProgress, [0, 1], [20, -30]);
  const r7 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const r8 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const r9 = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div
      ref={ref}
      className="xl:min-h-screen flex justify-center items-center text-black relative mt-20 mb-10 md:my-30 xl:mt-40 xl:mb-80"
    >
      <div className="hidden xl:block">
        <motion.div
          style={{ x: x1, y: y1, rotate: r1 }}
          className="absolute text-black top-0 left-0"
        >
          <Card
            testimonial={`"Stories at Scale is in the top 1% of teams I've worked with. They genuinely care about the project and outcomes."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a014030cda3f1845a8562_image_2024-05-31_12-34-52.png"
          />
        </motion.div>

        <motion.div
          style={{ x: x2, y: y2, rotate: r2 }}
          className="absolute text-black  top-70 left-10"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e523b634d60a18bd161b8f_clutch.svg"
            alt="image-cloud"
            width={300}
            height={300}
          />
        </motion.div>

        <motion.div
          style={{ x: x3, y: y3, rotate: r3 }}
          className="absolute left-0 bottom-50"
        >
          <Card
            testimonial={`"Stories at Scale delivered in weeks what we'd been trying to achieve for over a year. Game-changing quality and speed!"`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png"
          />
        </motion.div>

        <motion.div
          style={{ y: y4, rotate: r4 }}
          className="absolute left-20 bottom-0"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e525277e6bfc538276cd57_chat.svg"
            alt="image-chat"
            width={220}
            height={220}
          />
        </motion.div>

        <motion.div
          style={{ x: x5, y: y5, rotate: r5 }}
          className="absolute right-10 top-0"
        >
          <Card
            testimonial={`"When even our most critical stakeholders praised the UX, we knew Stories at Scale had nailed it. Exceptional work."`}
            reviewer="Naveen"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01690c508b5bebac1311_image_2024-05-31_12-38-04-p-500.png"
          />
        </motion.div>

        <motion.div
          style={{ x: x6, rotate: r6 }}
          className="absolute right-20 top-80"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e524b35f5d677e9845c642_pencil.svg"
            width={200}
            height={200}
            alt="image-pencil"
          />
        </motion.div>

        <motion.div
          style={{ x: x7, y: y7, rotate: r7 }}
          className="absolute right-0"
        >
          <Card
            testimonial={`"Huge thanks to the Stories at Scale team. Incredibly proud of what we built together."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
        </motion.div>

        <motion.div
          style={{ x: x8, y: y8, rotate: r8 }}
          className="absolute right-50 bottom-30"
        >
          <img
            src="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/63e526efa973a610da0df9e8_farley.gif"
            width={120}
            height={120}
            alt="image-pfp"
            className="rounded-lg"
          />
        </motion.div>

        <motion.div
          style={{ x: x9, y: y9, rotate: r9 }}
          className="absolute right-1/2 translate-1/2 bottom-0"
        >
          <Card
            testimonial={`"Stories at Scale brought mind-opening ideas and turned them into tangible, effective designs. Truly impressive."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center ">
        <div className="gap-x-2 px-5 py-2 bg-white rounded-full flex items-center">
          <span className="text-[14px] xl:text-[16px] font-fk-grotesk">
           
          </span>
          <div className="flex space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-current rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mx-10 xl:mx-0 text-4xl md:text-5xl font-fk-display text-center leading-tight max-w-5xl mt-4">
          Clients can't say enough about Stories at Scale.
        </div>

        <div className="font-fk-grotesk mx-10 xl:mx-0 text-base md:text-lg max-w-md text-center mt-5">
          Take a look for yourself. No Slack messages were harmed in the making
          of this component.
        </div>

        <div className="flex flex-col xl:hidden mt-8">
          <Card
            testimonial={`"Stories at Scale brought mind-opening ideas and turned them into tangible, effective designs. Truly impressive."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a018147f26450b8d1c326_image_2024-05-31_12-36-23.png"
          />
          <Card
            testimonial={`"Huge thanks to the Stories at Scale team. Incredibly proud of what we built together."`}
            reviewer="Naveen"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
          <Card
            testimonial={`"Stories at Scale delivered in weeks what we'd been trying to achieve for over a year. Game-changing quality and speed!"`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01571b3134a64425d44a_image_2024-05-31_12-35-12-p-500.png"
          />
          <Card
            testimonial={`"Huge thanks to the Stories at Scale team. Incredibly proud of what we built together."`}
            reviewer="Rishi"
            icon="https://cdn.prod.website-files.com/63dae19244d432799bf5baa4/665a01757508c661ca1da843_image_2024-05-31_12-35-52.png"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({
  testimonial,
  icon,
  reviewer,
}: {
  testimonial: string;
  icon: string;
  reviewer: string;
}) => {
  return (
    <div className="flex flex-col gap-y-5 xl:gap-y-2 mx-5 my-2 md:mx-10 md:my-3 rounded-lg xl:rounded-4xl bg-white text-black font-fk-grotesk px-4 py-3 xl:px-10 xl:py-8 xl:max-w-xl md:max-w-full md:p-8">
      <div className="font-fk-grotesk text-[16px] xl:text-xl xl:font-semibold">
        {testimonial}
      </div>
      <div className="flex flex-col  xl:flex-row xl:items-center gap-x-2">
        <img
          src={icon}
          alt="image"
          width={20}
          height={20}
          className="rounded-full"
        />
        <div className="text-sm">{reviewer}</div>
      </div>
    </div>
  );
};

export default Testimonials;
