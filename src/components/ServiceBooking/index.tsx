import { Header } from "./header";
import { Cart } from "./cart";
import { FC } from "react";
import { Services } from "./Service";

interface ServiceBookingProps {
  categoryUrl: string;
}

const ServiceBooking: FC<ServiceBookingProps> = ({ categoryUrl }) => {
  return (
    <div className="w-screen relative bg-white">
      <Header/>
        <div className="grid grid-cols-12 pt-4">
          <div className="col-span-12 md:col-span-9 lg:col-span-9">
            <Services categoryUrl={categoryUrl} />
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-3">
            <Cart />
          </div>
        </div>
      </div>
  );
};



export default ServiceBooking;
