import React from "react";

export default function Mission() {
  return (
    <>
      <div class="flex flex-col md:flex-row bg-gray-100">
        <div class="md:w-1/2 flex items-center justify-center">
          <div class="p-8 text-center">
            <h2 id="vision-head" class="text-4xl mb-4 font-bold">
              Vision of the Department
            </h2>
            <p id="vision-text" class="text-base leading-6">
              To evolve as a Center of Excellence in emerging areas, impart
              quality education to produce ethical, motivated, and skilled
              professionals to meet the ever-increasing technological & social
              challenges.
            </p>
          </div>
        </div>

        <div class="md:w-1/2 bg-white">
          <div class="p-8">
            <h2 id="mission-head" class="text-4xl mb-4 font-bold">
              Missions of the Department
            </h2>
            <ul class="list-disc list-inside">
              <li class="mb-4">
                <strong>M1:</strong> To impart students with self-discipline,
                hard work, all-round personality development, and creative
                problem-solving approach.
              </li>
              <li class="mb-4">
                <strong>M2:</strong> To provide quality education by using the
                latest infrastructure and nurturing a collaborative culture.
              </li>
              <li class="mb-4">
                <strong>M3:</strong> To provide students an opportunity to learn
                both foundational and experimental components in emerging areas.
              </li>
              <li class="mb-4">
                <strong>M4:</strong> To promote and nurture the spirit of
                innovation and entrepreneurship in our students.
              </li>
              <li>
                <strong>M5:</strong> To emerge as a Center of Excellence through
                Research, Consultancy, and Development Activities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
