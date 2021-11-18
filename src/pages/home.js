import React from "react";
import $ from "jquery";
const Home = () => {
  $(function () {
    $(".progress").each(function () {
      var value = $(this).attr("data-value");
      var left = $(this).find(".progress-left .progress-bar");
      var right = $(this).find(".progress-right .progress-bar");

      if (value > 0) {
        if (value <= 50) {
          right.css(
            "transform",
            "rotate(" + percentageToDegrees(value) + "deg)"
          );
        } else {
          right.css("transform", "rotate(180deg)");
          left.css(
            "transform",
            "rotate(" + percentageToDegrees(value - 50) + "deg)"
          );
        }
      }
    });

    function percentageToDegrees(percentage) {
      return (percentage / 100) * 360;
    }
  });

  const card = [
    { title: "Active", progress: "80", lastMonth: "80" },
    { title: "Work hours", progress: "60", lastMonth: "80" },
    { title: "Activity", progress: "55", lastMonth: "80" },
    { title: "Total", progress: "25", lastMonth: "80" },
  ];

  return (
    <div className="main">
      <div className="container">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 mx-auto mb-5 text-white text-center">
              <h1 className="display-4">Ramson Stainless CRM</h1>
              <p className="lead mb-0">✓Created by Mukesh ©2021-2022</p>
            </div>
            {card.map((item) => (
              <div className="col-xl-3 col-lg-6 mb-4" key={item.title}>
                <div className="bg-white rounded-lg p-5 shadow">
                  <h2 className="h6 font-weight-bold text-center mb-4">
                    {item.title}
                  </h2>
                  <div className="progress mx-auto" data-value={item.progress}>
                    <span className="progress-left">
                      <span className="progress-bar border-danger"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar border-warning"></span>
                    </span>
                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                      <div className="h2 font-weight-bold">
                        {item.progress}
                        <sup className="small">%</sup>
                      </div>
                    </div>
                  </div>
                  <div className="row text-center mt-4">
                    <span className="small text-gray">Last month</span>
                    <span className="small text-gray">{item.lastMonth}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
