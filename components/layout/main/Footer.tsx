import { Typography } from "@/components/ui/Shadcn/Typography";
import Image from "next/image";
import Link from "next/link";
import { BiMailSend, BiPhone } from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-black/90 w-full h-fit p-12 text-white flex flex-wrap justify-evenly ">
      <div>
        <Typography variant="h4" className="text-white">
          Links
        </Typography>
        <Link href="/aboutus">
          <Typography variant="p" className="text-white">
            About Us
          </Typography>
        </Link>
        <Link href="/aboutus">
          <Typography variant="p" className="text-white">
            Contact Us
          </Typography>
        </Link>
      </div>

      <div className="flex flex-col gap-1.5">
        <Typography variant="h4" className="text-white">
          How to Contact Us
        </Typography>
        <Link href="">
          <Typography
            variant="p"
            className="text-white flex gap-0.5 items-center">
            <BiPhone /> +1 11111111
          </Typography>
        </Link>
        <Link href="">
          <Typography
            variant="p"
            className="text-white flex gap-0.5 items-center">
            <BiMailSend /> n.sport@gmail.com
          </Typography>
        </Link>
      </div>
      <div className="flex flex-col gap-1.5">
        <Typography variant="h4" className="text-white">
          Our Locations
        </Typography>
        <Image
          src="/landing/location-1.webp"
          alt="location"
          width={200}
          height={150}
        />
      </div>
    </div>
  );
}

export default Footer;
