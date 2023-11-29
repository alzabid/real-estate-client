import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination } from "swiper/modules";

const Reviews = () => {
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/review");

      const sortedReviews = res.data.sort((a, b) => {
        const timeA = new Date(a.time);
        const timeB = new Date(b.time);
        return timeB - timeA;
      });

      return sortedReviews;
    },
  });
  console.log(reviews);

  return (
    <div className="px-10 mb-10">
      <Title> Latest Reviews</Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((element) => (
          <SwiperSlide key={element.id}>
            <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg border-2 border-primary shadow-lg">
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-primary rounded-full"
                  alt="Testimonial avatar"
                  src={element.user_photoURL}
                />
              </div>

              <h2 className="mt-2 text-xl font-semibold text-black  md:mt-0">
                {element.title}
              </h2>
              <p className="text-lg font-medium text-primary">
                {element.user_name}
              </p>

              <p className="mt-2 text-sm text-gray-600 ">{element.review}</p>

              <p className="mt-2 text-sm text-gray-600 ">{element.time}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
