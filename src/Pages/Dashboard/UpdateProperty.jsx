

const UpdateProperty = () => {
    return (
      <div className="bg-[#F8F8F8] px-6 md:px-10 lg:px-52 py-10">
        <h1 className="text-3xl text-center  font-extrabold mb-5">
          Update Property
        </h1>
        <form>
          {/* row 0 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Agent Name</span>
              </label>

              <input
                type="text"
                name="agent_name"
                placeholder="Agent Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Agent Image</span>
              </label>

              <input
                type="number"
                name="agent_image"
                placeholder="Agent Image"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row 1 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Property Title</span>
              </label>

              <input
                type="text"
                name="title"
                placeholder="Property Title"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Property Location</span>
              </label>

              <input
                type="text"
                name="location"
                placeholder="Property Location"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="md:flex gap-4 md:mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price Range</span>
              </label>

              <input
                type="text"
                name="price"
                placeholder="Price Range"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Property Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Property Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row 3 */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Property Details</span>
              </label>

              <input
                type="text"
                name="details"
                placeholder="Property Details"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className=" flex justify-center items-center mb-8">
            <input
              type="submit"
              value="Update Property"
              className="btn btn-outline w-44"
            />
          </div>
        </form>
      </div>
    );
};

export default UpdateProperty;