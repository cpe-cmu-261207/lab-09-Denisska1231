import React from "react";

export default function Skill() {
  return (
    <div>
      <div class=" mx-auto m-3 d-flex justify-content-center fs-3">
        My skills
      </div>
      <div class="hstack mx-auto justify-content-center">
        <div
          class="text-bg-light card mb-3 mx-3 shadow"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/Programming.png"
                class="img-fluid rounded-start"
                style={{ objectfit: "cover", width: "100%", height: "140px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Programming</h5>
                <p class="card-text text-muted">
                  I like to coding. I think coding is not difficult but not
                  easy. When i coding and make it do what i want, that make me
                  fun and happy. I'm coding using c++ and html. I wish i could
                  do more language.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-bg-light card mb-3 shadow"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/microsoft.png"
                class="img-fluid rounded-start"
                style={{ objectfit: "cover", width: "100%", height: "140px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Microsoft Using</h5>
                <p class="card-text text-muted">
                  I can use many Microsoft applications such as, word, excel,
                  powerpoint to create projects, infographic, art or any
                  contents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
