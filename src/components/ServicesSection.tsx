"use client";

// The main section component rendering the new content without icons.
const ExpertiseSection = () => {
  // Header Component (Previously "Beyond")
  const Header = () => (
    <div className="flex flex-col-reverse items-center justify-between text-black mx-5 my-10 md:flex-row md:my-20 xl:mx-20">
      <div className="max-w-sm text-center text-[17px]/5 font-medium font-fk-grotesk md:mx-8 md:max-w-[350px] md:text-justify md:text-[14px] xl:text-xl">
        At Dhasha Media, we don&apos;t just create campaigns - we build digital experiences that connect, engage, and convert. Our data-driven approach ensures every strategy delivers measurable results.
      </div>
      <div className="mb-3 max-w-xl text-right font-fk-display text-3xl md:text-[68px] md:leading-14 xl:text-9xl/30">
        Why Dhasha Media
      </div>
    </div>
  );

  // Grid Component with icons removed.
  const ContentGrid = () => (
    <div className="mx-4 flex flex-wrap text-black md:mx-8 xl:mx-20 xl:flex-nowrap xl:gap-x-8">
      {/* Column 1 */}
      <div className="my-4 flex flex-col justify-end rounded-xl bg-[#32F6C7] p-3 md:p-10 xl:my-0 xl:rounded-[40px] xl:p-20">
        {/* Icon Removed */}
        <div>
          <div className="mt-3 font-fk-display text-[22px] xl:text-5xl">You First</div>
          <div className="mt-1.5 font-fk-grotesk text-[17px]/5 xl:mt-5 xl:text-xl">
            You&apos;re the reason we&apos;re here, full stop. We value collaboration
            above ego and tackle the extra mile to achieve your vision with a
            can-do attitude.
          </div>
        </div>
      </div>
      
      {/* Column 2 */}
      <div className="w-full space-y-5 xl:w-auto">
        {/* Top Row in Column 2 */}
        <div className="flex min-h-fit flex-col justify-end rounded-xl bg-white p-3 md:p-10 xl:min-h-[50vh] xl:rounded-[40px] xl:p-20">
          {/* Icon Removed */}
          <div>
            <div className="mt-3 font-fk-display text-[22px] xl:text-5xl">Cutting Edge</div>
            <div className="mt-1.5 font-fk-grotesk text-[17px]/5 xl:mt-5 xl:text-xl">
              Proactive about adopting the latest technologies, we deliver
              forward-thinking brand solutions that evolve to serve future
              needs.
            </div>
          </div>
        </div>
        
        {/* Bottom Row in Column 2 */}
        <div className="flex flex-wrap xl:flex-nowrap xl:gap-x-8">
          <div className="mb-4 flex w-full flex-col justify-end rounded-xl bg-[#F6FA5E] p-4 md:p-10 xl:mb-0 xl:min-h-[50vh] xl:max-w-full xl:rounded-[40px] xl:max-w-[50%]">
            {/* Icon Removed */}
            <div>
              <div className="mt-3 font-fk-display text-[22px] xl:text-5xl">Hide Nothing</div>
              <div className="mt-1.5 font-fk-grotesk text-[17px]/5 xl:mt-5 xl:text-xl">
                &#34;Transparency&#34; isn&apos;t a buzzword for us — it&apos;s how we roll.
                You&apos;re behind-the-scenes with our team&#44; following our every
                move.
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-full flex-col justify-end rounded-xl bg-[#60C6FF] p-4 md:p-10 xl:min-h-[50vh] xl:rounded-[40px] xl:p-20">
            {/* Icon Removed */}
            <div>
              <div className="mt-3 font-fk-display text-[22px] xl:text-5xl">Fresh Angles</div>
              <div className="mt-1.5 font-fk-grotesk text-[17px]/5 xl:mt-5 xl:text-xl">
                Explore. Adapt. Stay curious. Our team lives by these values,
                designing to inspire and create a better, more interesting world.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-12 dark:bg-black" id="about">
      <div className="mx-auto max-w-screen-2xl">
        <Header />
        <ContentGrid />
      </div>
    </section>
  );
};

export default ExpertiseSection;
