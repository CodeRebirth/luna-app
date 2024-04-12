// pages/cart.js
import { Header } from "./header";
import { Cart } from "./cart";
// import { Products } from "./products";
import { Services } from "./Services";
import Image from "next/image";
// import Navbar from "../Navbar";
import { FC } from 'react';

interface ServiceBookingProps {
  categoryUrl: string;
}

const ServiceBooking: FC<ServiceBookingProps> = ({ categoryUrl }) => {
  return (
    <div style={{
      background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11), rgba(14, 165, 233, 0.41), rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4))",
    }}>
      <Header/>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9">
          <Services categoryUrl={categoryUrl}/>
        </div>
        <div className="col-span-12 md:col-span-3">
          <h1 className="text-3xl font-semibold mb-8 ml-5 mt-5">Services we offer!!</h1>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_1232,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1698216851653-cc8265.jpeg"
              alt="Banner Image"
              width={300} height={200}
              style={{ objectFit: "cover", overflow:"hidden"}}
            />
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;

