import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container mt-5">
        <form onSubmit="">
          <input
            type="text"
            className="form-control mt-1"
            id=""
            placeholder="Name"
            required
          />
          <div className="row">
            <div className="col">
              <input
                type="email"
                className="form-control mt-1"
                id=""
                placeholder="E-mail"
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control mt-1"
                id=""
                placeholder="Mobile no."
                required
              />
            </div>
          </div>
          <input
            type="text"
            className="form-control mt-1"
            id=""
            placeholder="Subject"
            required
          />
          <textarea
            name=""
            id=""
            type="text"
            className="form-control mt-1"
            placeholder="comment . . ."
            required
          ></textarea>
          <center>
            <input
              type="submit"
              value="Send massage"
              className="btn btn-danger mt-3"
              id=""
            />
          </center>
        </form>
      </div>
    </>
  );
};

export default Contact;
