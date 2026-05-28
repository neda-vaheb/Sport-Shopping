import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { categoryLanding } from "@/constants/landing";
import Image from "next/image";

function CategorySection() {
  return (
    <>
      <section className="w-full flex md:flex-row flex-col   gap-0 ">
        {categoryLanding.map((item, index) => (
          <div
            key={index}
            className="relative flex w-full h-100 overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
            />

            <div className="absolute p-3 inset-0 bg-black/20 flex flex-col items-start justify-end ">
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
      <section className=" px-7 flex md:flex-row flex-col justify-between  w-full container my-10">
        <div className="my-10  md:w-1/2 w-full flex flex-col ">
          <Typography variant="h2" className="font-bold md:text-4xl ">
            Kids Collection
          </Typography>
          <Typography variant="p" className="text-gray-400 ">
            Best collection for kids. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita, maxime! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla laborum vero architecto! Harum,
            nemo itaque. Expedita, maxime! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nulla laborum vero architecto! Harum,
            nemo itaque.
          </Typography>
        </div>

        <div className="relative">
          <Image
            src="/landing/kids-cat.webp"
            alt="kids"
            width={700}
            height={500}
          />

          <div className="absolute p-3 inset-0 bg-black/5 flex flex-col items-start justify-end ">
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
