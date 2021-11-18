import React from "react";
import Select from "react-select";

const CSalesForm = () => {
  const options = [
    { value: "Jindal Steel Italia", label: "Jindal Steel Italia" },
    { value: "JNB", label: "JNB" },
    { value: "SNB", label: "SNB" },
    { value: "Ravi Seamless", label: "Ravi Seamless" },
    { value: "NBT", label: "NBT" },
    { value: "Ramsons Stainless", label: "Ramsons Stainless" },
    { value: "PS RAJ", label: "PS RAJ" },
    { value: "Ridhi Sidhi", label: "Ridhi Sidhi" },
    { value: "Hisar Metal", label: "Hisar Metal" },
    { value: "Suncity", label: "Suncity" },
    { value: "Sunwin", label: "Sunwin" },
    { value: "SNP", label: "SNP" },
  ];
  return (
    <form class="container" id="form3" onSubmit="">
      <div class="mt-2 col-md-4 mx-auto text-center">
        <h3 class="">Channel Sales Scrapings</h3>
      </div>
      <div class="row mt-2 mb-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 bg-light p-4 form-group salesForm">
          <div className="row">
            <div className="col">
              <input
                type="text"
                class="form-control mt-2"
                id="Name3"
                placeholder="Prospect Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                class="form-control mt-2"
                id="Company3"
                placeholder="Company Name *"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                class="form-control mt-2"
                id="Phone3"
                placeholder="Work Phone *"
                maxlength="10"
                onchange="check5()"
              />
            </div>
            <div className="col">
              <input
                type="text"
                class="form-control mt-2"
                id="Mobile3"
                placeholder="Alternate Mobile No."
                maxlength="10"
                onchange="check6()"
              />
            </div>
          </div>

          <input
            type="text"
            class="form-control mt-2"
            id="City3"
            placeholder="City*"
          />
          <input
            type="text"
            class="form-control mt-2"
            id="State3"
            placeholder="State"
            autoComplete="on"
            list="datalist"
          />
          <datalist class="form-control mt-2" id="datalist" hidden></datalist>

          <div>
            <b>Work Email of the Channel Sales Executive *</b>
            <select class="form-control mt-2" id="WorkEmailSelect">
              <option value="0" selected disabled>
                Select
              </option>
              <option>Sales.Lucknow@ramsonssteel.in</option>
              <option>Sales.Lucknow@ramsonssteel.in</option>
              <option>sales.kurukshetra@ramsonssteel.in</option>
              <option>sales.jammu@ramsonssteel.in</option>
              <option>sales.barabanki@ramsonssteel.in</option>
              <option>sales.amritsar@ramsonssteel.in</option>
              <option>Sales.agra@ramsonssteel.in</option>
              <option>Sales.pathankot@ramsonssteel.in</option>
            </select>
            <p class="text-danger">
              Note :- If you don't have email please call to Sales Coordinator
              for create a new ID
            </p>
            <b>Which brand do you generally buy ? *</b>
            <Select
              isMulti
              name="colors"
              options={options}
              className="basic-multi-select mt-2"
              classNamePrefix="select"
            />
            <b>Type of Lead *</b>
            <select class="form-control mt-2" id="TypeLeadSelect">
              <option value="0" selected disabled>
                Select
              </option>
              <option>Architect</option>
              <option>Fabricator(Less than 1 MT per Month)</option>
              <option>Trader(Less than 10MT per month)</option>
              <option>Super Stockist (More than 20MT per Month)</option>
              <option>Builder</option>
              <option>Retailer (Less than 3MT Per month)</option>
            </select>
            <div class="row">
              <b>Item*</b>
              <div class="col-md-4">
                <select class="form-control mt-2" id="NotepadSelect">
                  <option value="0" selected disabled>
                    Notepad
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div class="col-md-5">
                <select class="form-control mt-2" id="SampleSelect">
                  <option value="0" selected disabled>
                    Sample of Pipe
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div class="col-md-3">
                <select class="form-control mt-2" id="PenSelect">
                  <option value="0" selected disabled>
                    Pen
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <input
              type="text"
              class="form-control mt-2"
              id="Box304"
              placeholder="Current Rate Purchase 304"
            />
            <input
              type="text"
              class="form-control mt-2"
              id="JT"
              placeholder="Current Rate Purchase JT"
            />
            <input
              type="text"
              class="form-control mt-2"
              id="Remarks3"
              placeholder="Your remarks"
            />
            <center>
              <div class="row">
                <div class="file-field input-field col s12">
                  <div class="btn">
                    <b>
                      <input
                        class="btn btn-white border-dark"
                        id="files"
                        type="file"
                        onchange="updateFileDrive()"
                      />
                    </b>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div class="col-md-2"></div>
        <center>
          <p id="num1Error3" class="text-warning" hidden>
            ! Your Work Phone is already exist in our data
          </p>
          <p id="num2Error3" class="text-warning" hidden>
            ! Your Alternate Mobile no. is already exist in our data
          </p>
          <p id="submitError3" class="text-warning" hidden>
            ! Please fill the required(*) box
          </p>
          <input
            type="submit"
            class="btn btn-primary btn-lg active mt-3"
            id="bt3"
            value="Submit"
          />
        </center>
      </div>
    </form>
  );
};

export default CSalesForm;
