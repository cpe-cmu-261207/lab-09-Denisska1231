import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function contact() {
  return (
    <div>
      <Mainlayout>
        <p class="text-center fs-3" style={{ color: "dodgerblue" }}>
          Contact Me
        </p>
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <div className="d-flex justify-content-center gap-3">
            <div>
              <img
                src="/Mee.jpg"
                class="rounded-circle"
                width="200"
                height="200"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div class="vstack gap-2">
              <div class="d-flex ">
                <div class="text-light" style={{ minWidth: "100px" }}>
                  Name
                </div>
                <span class="text-light">Jedthaphon Kobkam</span>
              </div>
              <div class="d-flex gap-4">
                <div class="text-light" style={{ minWidth: "76px" }}>
                  Nickname
                </div>
                <span class="text-light">Bas</span>
              </div>
              <div class="d-flex gap-4">
                <div class="text-light" style={{ minWidth: "75px" }}>
                  Address
                </div>
                <span class="text-light">
                  135 ม.6 ต.แม่ยาว อ.เมือง จ.เชียงราย 57100
                </span>
              </div>
              <div class="d-flex gap-4">
                <div class="text-light" style={{ minWidth: "75px" }}>
                  Facebook
                </div>
                <span class="text-light">
                  <a
                    href="https://www.facebook.com/profile.php?id=100001598666170"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jedthaphon Kobkam
                  </a>
                </span>
              </div>
              <div class="d-flex gap-5">
                <div class="text-light" style={{ minWidth: "50px" }}>
                  Email
                </div>
                <span class="text-light">
                  <a href="mailto: charnchol_pa@cmu.ac.th">
                    Jedthaphon_k@cmu.ac.th
                  </a>
                </span>
              </div>
              <div class="d-flex gap-5">
                <div class="text-light" style={{ minWidth: "50px" }}>
                  Phone
                </div>
                <span class="text-light">0841691123</span>
              </div>
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
