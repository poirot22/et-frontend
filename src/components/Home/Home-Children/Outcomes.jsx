import React from 'react';
import './Outcomes.css';

export default function Outcomes() {
  return (
    <div className='w-2/3 Outcomes'>
        <h1 className='text-4xl font-bold text-center mt-10'>PROGRAM EDUCATIONAL OBJECTIVES</h1>
        <ul class="list-group mt-10">
            <li className="program_item list-group-item">
            <b>PEO 1:</b> Graduates will acquire capability to apply their knowledge and skills to solve various kinds of computational engineering problems.
            </li>
            <li className="program_item list-group-item">
            <b>PEO 2:</b> Graduates will exhibit the ability to apply the acquired skills in various domains and multi-disciplinary areas, to function ethically and meet the ever-increasing technological and social challenges.
            </li>
            <li className="program_item list-group-item">
            <b>PEO 3:</b> To evolve as resourceful engineers catering to dynamic industrial needs and engage in life-long learning.
            </li>
            <li className="program_item list-group-item">
            <b>PEO 4:</b> Graduates will acquire soft skills to adapt and excel in diverse global environment.
            </li>
        </ul>
        <h1 className='text-4xl font-bold text-center mt-10'>PROGRAM SPECIFIC OUTCOMES</h1>
        <ul class="list-group mt-10">
            <li className="program_item list-group-item">
            <b>PSO 1:</b> An ability to analyse a problem, design algorithm, identify and define the computing requirements appropriate to its solution and implement the same.
            </li>
            <li className="program_item list-group-item">
            <b>PEO 2:</b>  Design an algorithm, component, or process to meet desired needs, within realistic constraints through analytical, logical and problem solving skills.
            </li>
            <li className="program_item list-group-item">
            <b>PEO 3:</b> Effectively integrate solutions using emerging areas into the user environment.
            </li>
        </ul>
    </div>
  )
}
