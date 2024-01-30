import React from 'react'
import bynumbers from '../../../assets/bynumbers.jpg';
import sprite from '../../../assets/sprite.png';
import { useState, useEffect, useRef } from "react";
import './Numbers.css';

export default function Numbers() {
  const [faculty, setFaculty] = useState(0);
  const [staff, setStaff] = useState(0);
  const [students, setStudents] = useState(0);
  const [projects, setProjects] = useState(0);
  const [placements, setPlacements] = useState(0);
  const targetRef = useRef(null);
  return (
    

<div className="relative h-64 header mt-10">
          
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bynumbers})`
            }}
          />
              <h1 className="pl-6 text-3xl font-semibold heading-top">ET Department by the Numbers</h1>
          <div
            className="absolute inset-0 flex justify-center items-center m-5"
          > 
            <div className="w-full flex justify-evenly m-5">

            
              <div className="card__table">
                <div className="card__tablecell">
                  <span className="sprite icon__ug"></span>
                </div>
                <div className="card__tablecell">
                  <div className='card__userdetails'>
                    <h3 className="text-4xl font-bold">{students}</h3>
                    <p className='text-xl'>Students</p>
                  </div>

                </div>
              </div>
              

              <div className="card__table">
                <div className="card__tablecell">
                  <span className="sprite icon__faculty"></span>
                </div>
                <div className="card__tablecell">
                  <div className='card__userdetails'>
                    <h3 className="text-4xl font-bold">{faculty}</h3>
                    <p >Faculty</p>
                  </div>

                </div>
              </div>

              <div className="card__table">
                <div className="card__tablecell">
                  <span className="sprite icon__staff"></span>
                </div>
                <div className="card__tablecell">
                  <div className='card__userdetails'>
                    <h3 className="text-4xl font-bold">{staff}</h3>
                    <p >Staff</p>
                  </div>

                </div>
              </div>


              <div className="card__table">
                <div className="card__tablecell">
                  <span className="sprite icon__investment"></span>
                </div>
                <div className="card__tablecell">
                  <div className='card__userdetails'>
                    <h3 className="text-4xl font-bold">{projects}</h3>
                    <p >Projects</p>
                  </div>

                </div>
              </div>

              <div className="card__table">
                <div className="card__tablecell">
                  <span className="sprite icon__placements"></span>
                </div>
                <div className="card__tablecell">
                  <div className='card__userdetails'>
                    <h3 className="text-4xl font-bold">{placements}</h3>
                    <p >Placements</p>
                  </div>

                </div>
              </div>
              
              

            </div>
          </div>
        </div>
  )
}

