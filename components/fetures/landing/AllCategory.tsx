import { Typography } from "@/components/ui/Typography";
import { AllCategories } from "@/constants/landing";
import Image from "next/image";

function AllCategory() {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center flex flex-col justify-center items-center ">
        <Typography variant="h2">Our Categories</Typography>
        <Typography variant="p" className="text-gray-500">
          every thing that you want
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-7 py-10">
        {AllCategories.map((cat) => (
          <div key={cat.id}>
            <Image
              src={cat.url}
              alt={cat.alt}
              width={90}
              height={90}
              className="rounded-full"
            />
            <Typography variant="p">{cat.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCategory;
