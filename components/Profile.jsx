import React from "react";

export default function Profile() {
  return (
    <div className="mx-auto" style={{ maxWidth: "800px" }}>
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
        <div>
          <p className="display-5 mb-3 " style={{ color: "dodgerblue" }}>
            Jedthaphon Kobkam
          </p>
          <p className="text-light">
            Hello, My name is Jedthaphon Kobkam. I'm study at Chiangmai
            University as a Computer Engineering.
          </p>
        </div>
      </div>
    </div>
  );
}
