/* eslint-disable react/prop-types */


const Title = ({children}) => {
    return (
      <div>
        <div className="relative border-s-8 border-primary ps-3">
          <h2 className=" text-3xl lg:text-6xl font-bold">{children}</h2>
          {/* <p className="absolute bottom-0 text-9xl -z-10 opacity-5">
            {children}
          </p> */}
        </div>
      </div>
    );
};

export default Title;