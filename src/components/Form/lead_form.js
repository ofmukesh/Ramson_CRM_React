import React from "react";

const LeadForm = () => {
  return (
    <div className="container mt-2 text-center">
      <div className="row">
        <h1>	<div class="container" id="form1" >
			<div class="mt-2 col-md-4 mx-auto text-center">
				<h3 class="">Lead Generation Scrapings</h3>
			</div>
			<div class="row mt-2 mb-5">
				<div class="col-md-4"></div>
				<div class="col-md-4 bg-light p-4 form-group leadForm">
					<input type="text" class="form-control mt-1" id="Name"    placeholder="Prospect Name" />
					<input type="text" class="form-control mt-1" id="Company" placeholder="Company Name *" />
					<input type="text" class="form-control mt-1" id="Email"   placeholder="Work Email" />
					<input type="text" class="form-control mt-1" id="Phone"   placeholder="Work Phone *" maxlength="10" onchange="check1()" />
					<input type="text" class="form-control mt-1" id="Mobile"  placeholder="Alternate Mobile No." maxlength="10" onchange="check2()" />
					<input type="text" class="form-control mt-1" id="Website" placeholder="Work Website" />
					<input type="text" class="form-control mt-1" id="Address" placeholder="Address" />
					<input type="text" class="form-control mt-1" id="City"    placeholder="City" />
					<input type="text" class="form-control mt-1" id="State"   placeholder="State*" autoComplete="on" list="datalist"/>
					<datalist class="form-control mt-1" id="datalist" hidden></datalist>
					
					<div>
						<h4>Lead Source *</h4>
						<select class="form-control mt-1" id="LeadSourceSelect1"  onchange="onChange1()">
          <option value="0" selected disabled>Lead Source *</option>
          <option>Just Dail</option>
          <option>Trade India</option>
          <option>India Mart</option>
          <option>Yellow Pages</option>
          <option>Sulekha</option>
          <option>Facebook Group</option>
          <option>Google</option>
          <option>Alibaba Trade website</option>
          <option>Import & export website</option>
          <option>Website</option>
          <option>Office</option>
          <option>Other</option>
          <input type="text" class="form-control mt-1 mt-2" id="Other" placeholder="Other lead" hidden />
          <input type="text" class="form-control mt-1" id="Remarks"    placeholder="Your remarks" />
        </select>
					</div>
				</div>
				<div class="col-md-4"></div>
				<center>
					<p id="num1Error" class="text-warning" hidden>! Your Work Phone is already exist in our data</p>
					<p id="num2Error" class="text-warning" hidden>! Your Alternate Mobile no. is already exist in our
						data
					</p>
					<input type="button" class="btn btn-primary btn-lg activ mt-1" id="bt" value="Submit" onclick="onLeadSubmit()"/>
      </center>
			</div>
		</div></h1>
      </div>
    </div>
  );
};

export default LeadForm;
