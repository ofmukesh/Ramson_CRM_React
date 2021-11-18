import React from "react";

const User = () => {
  var userData = {
    name: "Mukesh",
    Age: "16",
    mobile: "7339758494",
    email: "of.mukesh@gmail.com",
  };
  var userAddress = { city: "Hisar", State: "Haryana", Country: "India" };

  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt={userData.name}
                        />
                      </div>
                      <h6 className="f-w-600">{userData.name}</h6>
                      <p>Web Designer</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{userData.email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{userData.mobile}</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Address
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">City</p>
                          <h6 className="text-muted f-w-400">{userAddress.city}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">State</p>
                          <h6 className="text-muted f-w-400">
                            {userAddress.State} ({userAddress.Country})
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
