import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function experience() {
  return (
    <div>
      <Mainlayout>
        <p class="text-center fs-3" style={{ color: "dodgerblue" }}>
          Project Experience
        </p>

        <div
          class="text-bg-light card mb-3 shadow d-flex justify-content-center mx-auto"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/robot.jpg"
                class="img-fluid rounded-start"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Robotic</h5>
                <p class="card-text text-muted">
                  When i at high school. Gifted computer teached me about
                  robotic and sent me to many robotic contests I was passed some
                  contests and got rewards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="text-bg-light card mb-3 shadow d-flex justify-content-center mx-auto"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Gifted Computer</h5>
                <p class="card-text text-muted">
                  When i at high school, i was studied on a Gifted Computer.The
                  Gifted Computer teached me about coding, algorithm, robotic
                  and pushed me to contests. That made me has a basic of
                  computer skill.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="/gifted.jpg"
                class="img-fluid rounded-end"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
