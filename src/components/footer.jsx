import React from "react";

export default function Footer() {
  return (
    <>
      <div style={{ marginTop: "auto" }}>
        <div class=" text-white" style={{"background-color":"#33110E"}}>
          <div class="flex justify-evenly p-4 mr-36">
            <div class="p-4 text-center">
              <p>Department of Emerging Technologies</p>
              <p class="text-sm">Copyright&#169;2024</p>
            </div>

            <div class="p-4 text-center">
              <p>CVR College of Engineering</p>
              <p class="text-sm">
                Vastunagar, Mangalpalli (V), Ibrahimpatnam (M),
              </p>
              <p class="text-sm">Rangareddy (D), Telangana 501 510</p>
            </div>

            <div class="p-4 text-center">
              <p>Quick Links</p>
              <a href="">Developers</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
