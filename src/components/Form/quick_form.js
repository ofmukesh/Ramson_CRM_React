import React from "react";

const QuickForm = () => {
  return (
    <>
      <form class="container" id="form2" onSubmit="">
        <div class="mt-2 col-md-4 mx-auto text-center">
          <h5 class="">Quik Lead Generation Scrapings</h5>
        </div>
        <div class="row mt-2 mb-5">
          <div class="col-md-4"></div>
          <div class="col-md-4 bg-light p-4 form-group quickForm">
            <input
              type="text"
              class="form-control mt-2"
              id="Name2"
              placeholder="Prospect Name"
            />
            <input
              type="text"
              class="form-control mt-2"
              id="Company2"
              placeholder="Company Name *"
              required
            />
            <input
              type="text"
              class="form-control mt-2"
              id="Email2"
              placeholder="Work Email"
            />
            <input
              type="text"
              class="form-control mt-2"
              id="Phone2"
              placeholder="Work Phone *"
              maxlength="10"
              onchange="check3()"
              required
            />
            <input
              type="text"
              class="form-control mt-2"
              id="Mobile2"
              placeholder="Alternate Mobile No."
              maxlength="10"
              onchange="check4()"
            />
            <div>
              <select
                class="form-control mt-2"
                id="LeadSourceSelect2"
                onchange="onChange2()"
              >
                <option value="0" selected disabled>
                  Lead Source *
                </option>
                <option>Facebook</option>
                <option>Directory</option>
                <option>Inbound call</option>
                <option>Visit/Visiting Card</option>
                <option>Whatsapp</option>
                <option>Google</option>
                <option>Other</option>
                <input
                  type="text"
                  class="form-control mt-2 mt-2"
                  id="Other2"
                  placeholder="Other lead"
                  hidden
                />
                <input
                  type="text"
                  class="form-control mt-2"
                  id="Remarks2"
                  placeholder="Your remarks"
                />
              </select>
            </div>
          </div>
          <div class="col-md-4"></div>
          <center>
            <p id="num1Error2" class="text-warning" hidden>
              ! Your Work Phone is already exist in our data
            </p>
            <p id="num2Error2" class="text-warning" hidden>
              ! Your Alternate Mobile no. is already exist in our data
            </p>
            <input
              type="submit"
              class="btn btn-primary btn-lg active mt-3"
              id="bt2"
              value="Submit"
            />
          </center>
        </div>
      </form>
    </>
  );
};
export default QuickForm;
