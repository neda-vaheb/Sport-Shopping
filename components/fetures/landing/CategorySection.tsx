import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { categoryLanding } from "@/constants/landing";
import Image from "next/image";

function CategorySection() {
  return (
    <>
      <section className="flex flex-col md:flex-row w-full gap-0">
        {categoryLanding.map((item, index) => (
          <div key={index} className="relative w-full h-100 overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
            />

            <div className="absolute p-3 inset-0 bg-black/40 flex flex-col items-start justify-end ">
              <Typography
                variant="h2"
                className="text-3xl font-bold text-white  mb-4">
                {item.title}
              </Typography>

              <Button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
                {item.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </section>
      <section className="my-10">
        <div className="my-10 flex flex-col justify-center items-center text-center">
          <Typography variant="h2" className="font-bold md:text-4xl ">
            Kids Collection
          </Typography>
          <Typography variant="p" className="text-gray-400">
            Best collection for kids
          </Typography>
        </div>

        <div className="relative w-full h-100 overflow-hidden">
          <Image
            src="/landing/kids.webp"
            alt="kids"
            width={1600}
            height={800}
          />

          <div className="absolute p-3 inset-0 bg-black/40 flex flex-col items-start justify-end ">
            <Typography
              variant="h3"
              className="text-3xl font-bold text-white mb-4">
              Kids Collection up to 70%
            </Typography>

            <Button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition">
              View All
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategorySection;
