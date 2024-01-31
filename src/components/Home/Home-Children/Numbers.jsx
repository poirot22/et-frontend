import React from 'react'
import bynumbers from '../../../assets/bynumbers.jpg';
import sprite from '../../../assets/sprite.png';
import { useState, useEffect, useRef } from "react";
import './Numbers.css';

import collegeoverview from '../../../assets/college-overview.jpg';

export default function Numbers() {
  const [isVisibleNumbers, setIsVisibleNumbers] = useState(false);

  const [faculty, setFaculty] = useState(0);
  const [staff, setStaff] = useState(0);
  const [students, setStudents] = useState(0);
  const [projects, setProjects] = useState(0);
  const [placements, setPlacements] = useState(0);

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setFaculty((prevCount) => {
              const newCount = prevCount + 1;
              if (newCount >= 12) {
                clearInterval(intervalId);
                return 12;
              }
              return newCount;
            });
          }, 50);
          observer.disconnect();
        }
      });
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []); // Update effect when the target changes

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setStaff((prevCount) => {
              const newCount = prevCount + 1;
              if (newCount >= 8) {
                clearInterval(intervalId);
                return 8;
              }
              return newCount;
            });
          }, 50);
          observer.disconnect();
        }
      });
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [8]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setStudents((prevCount) => {
              const newCount = prevCount + 1;
              if (newCount >= 59) {
                clearInterval(intervalId);
                return 59;
              }
              return newCount;
            });
          }, 20);
          observer.disconnect();
        }
      });
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [59]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setProjects((prevCount) => {
              const newCount = prevCount + 1;
              if (newCount >= 22) {
                clearInterval(intervalId);
                return 22;
              }
              return newCount;
            });
          }, 15);
          observer.disconnect();
        }
      });
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [22]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setPlacements((prevCount) => {
              const newCount = prevCount + 1;
              if (newCount >= 32) {
                clearInterval(intervalId);
                return 32;
              }
              return newCount;
            });
          }, 20);
          observer.disconnect();
        }
      });
    });
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [32]);

  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibleNumbers(true);
          } else {
            setIsVisibleNumbers(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, [divRef]);
  return (
    

<div className="relative h-64 header mt-10">
          
          <div
            className="absolute inset-0 bg-cover bg-center"
           style={{
              backgroundImage: `url(${collegeoverview})`,
              filter: "blur(5px)",
            }}
          />
              
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

