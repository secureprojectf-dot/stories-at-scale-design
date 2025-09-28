"use client";

// --- The Jaw component has been updated ---
const Jaw = () => {
    return (
        // 1. Background color changed to hero section yellow.
        <div className="mx-4 min-h-[400px] rounded-xl bg-[#F6FA5E] p-5 text-black md:mx-8 md:rounded-3xl md:p-10 xl:mx-20 xl:min-h-[80vh] xl:rounded-[40px] xl:p-24">
            
            {/* 2. Logo removed and replaced with a "Services" heading. */}
            <h2 className="font-fk-display mb-10 text-5xl font-bold md:text-6xl xl:mb-16 xl:text-8xl">
                Services
            </h2>
            
            <div className="flex flex-col justify-between md:flex-row xl:items-end">
                <div className="max-w-sm text-[23px]/6 font-fk-display font-semibold md:max-w-[200px] md:text-[36px]/10 xl:font-medium xl:text-7xl xl:leading-tight">
                    SAS&apos;s subscription service
                </div>
                <div className="mt-10 grid w-full grid-cols-2 gap-y-2 font-fk-display md:w-1/2 xl:mt-0 xl:grid-cols-3 xl:gap-x-32">
                    <div>
                        <div className="capitalize text-lg leading-6 md:text-[14px] xl:text-2xl xl:leading-loose">branding</div>
                        <div className="capitalize text-lg leading-6 md:text-[14px] xl:text-2xl xl:leading-loose">print</div>
                        <div className="capitalize text-lg leading-6 md:text-[14px] xl:text-2xl xl:leading-loose">strategy</div>
                        <div className="capitalize text-lg leading-6 md:text-[14px] xl:text-2xl xl:leading-loose">logos</div>
                        <div className="capitalize text-lg leading-6 md:text-[14px] xl:text-2xl xl:leading-loose">consulting</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

// The section wrapper remains, providing spacing and a consistent background.
const ExpertiseSection = () => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-black md:py-24" id="services">
      <Jaw />
    </section>
  );
};

export default ExpertiseSection;
