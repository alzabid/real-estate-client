import { IoCheckmarkCircle } from "react-icons/io5";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center my-10 container">
      <div className="md:w-[50%] overflow-hidden">
        <img
          className="w-full h-full object-cover p-8"
          src="/img/7.jpg"
          alt=""
        />
      </div>
      <div className="md:w-[50%] p-8 lg:p-20 space-y-4">
        <h2 className="text-2xl">About Us</h2>
        <h2 className=" text-2xl lg:text-4xl">
          Your journey to the perfect home begins with us.{" "}
        </h2>
        <p className="text-xs lg:text-base text-justify">
          From cozy starter homes to luxurious estates, we connect you with the
          perfect property to call your own. Your dream home is just a click
          away—explore, discover, and find the key to your next chapter in real
          estate excellence.
        </p>
        <div className="pl-6 space-y-2">
          <p className="flex gap-5 items-center">
            <IoCheckmarkCircle /> Special Security service.
          </p>
          <p className="flex gap-5 items-center">
            <IoCheckmarkCircle /> 24/7 Support service.
          </p>
          <p className="flex gap-5 items-center">
            <IoCheckmarkCircle /> 100% Authentic Property.
          </p>
          <p className="flex gap-5 items-center">
            <IoCheckmarkCircle /> Easy To Payment System.
          </p>
        </div>

        <button className="btn btn-sm lg:btn-md btn-primary">About More</button>
      </div>
    </div>
  );
};

export default About;
