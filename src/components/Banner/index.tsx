import React from "react";
import Image from "next/image";
import Link from "next/link";


export type BannerModel = {
  bannerId: string;
  bannerUrl: string;
  serviceId: number;
};

interface BannerProps {
  banners: BannerModel[];
}


const Banner: React.FC<BannerProps> = ({ banners }) => {
  return (
    <div className="w-full p-5 lg:p-20 bg-white">
      <div className="bg-white w-full rounded-lg overflow-hidden transition duration-300">
        <div className="relative card-hover-effects">
          <Link href="/your-desired-path">
            <Image
              src={banners[0].bannerUrl}
              alt="banner image"
              width={1232}
              height={692}
              style={{ objectFit: "cover", width: '100%', height: 'auto' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
