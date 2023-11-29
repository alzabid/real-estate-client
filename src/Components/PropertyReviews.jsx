/* eslint-disable react/prop-types */


const PropertyReviews = ({ element }) => {
    console.log(element)
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg border-t-2 border-primary shadow-lg">
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
      <p className="text-lg font-medium text-primary">{element.user_name}</p>
      <p className="text-lg font-medium text-primary">{element.email}</p>

      <p className="mt-2 text-sm text-gray-600 ">{element.review}</p>

      <p className="mt-2 text-sm text-gray-600 ">{element.time}</p>
    </div>
  );
};

export default PropertyReviews;