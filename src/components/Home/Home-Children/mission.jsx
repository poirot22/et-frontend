import React from "react";
import './mission.css';

export default function Mission() {
  return (
    <>
      <div class="vision">
        <div class="vision text-4xl m-3 p-2 mt-0">
          <h2 id="vision-head" class="mb-2 font-bold mt-4">Vision of the Department</h2>
          <p id="vision-text">
            To evolve as a Center of Excellence in emerging areas, impart quality
            education to produce ethical, motivated and skilled professionals to meet
            the ever-increasing technological & social challenges.
          </p>
        </div>

        <div class="vision text-4xl m-3 p-2">
          <h2 id="vision-head" class="mb-2 font-bold mt-3">Missions of the Department</h2>
        </div>
        <div class="grid justify-items-center pb-10 rounded-md">
            <table class="Table table-bordered rounded-md" >
              <tbody>
                <tr>
                  <td class="p-3">
                    M1: To impart students with self-discipline, hard work, all-round
                    personality development and creative problem-solving approach.
                  </td>
                </tr>
                <tr>
                  <td class="p-3">
                    M2: To provide quality-education by using the latest
                    infrastructure and nurturing collaborative culture.
                  </td>
                </tr>
                <tr>
                  <td class="p-3">
                    M3: To provide students an opportunity to learn both foundational
                    and experimental components in emerging areas.
                  </td>
                </tr>
                <tr>
                  <td class="p-3">
                    M4: To promote and nurture the spirit of innovation and
                    entrepreneurship in our students.
                  </td>
                </tr>
                <tr>
                  <td class="p-3">
                    M5: To emerge as a Center of Excellence through Research,
                    Consultancy and Development Activities.
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>

    </>
  );
}