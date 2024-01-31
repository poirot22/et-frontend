import React from "react";
import dscover from "../../assets/ds-cover.jpg";
import "./aiml.css";
import collegeoverview from "../../assets/college-overview.jpg";
import { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DS() {
  const [isVisibleNumbers, setIsVisibleNumbers] = useState(false);

  const [faculty, setFaculty] = useState(0);
  const [staff, setStaff] = useState(0);
  const [students, setStudents] = useState(0);
  const [projects, setProjects] = useState(0);
  const [placements, setPlacements] = useState(0);

  const targetRef = useRef(null);

  const courses1 = [
    [
      {
        code: "68102",
        name: "Mathematics-I",
        credits: 3,
      },
      {
        code: "68103",
        name: "Engineering Chemistry",
        credits: 3,
      },
      {
        code: "68105",
        name: "Environmental Science",
        credits: 3,
      },
      {
        code: "65101",
        name: "Problem Solving Through C",
        credits: 3,
      },
      {
        code: "63102",
        name: "Engineering Drawing",
        credits: 3,
      },
    ],
    [
      {
        code: "68152",
        name: "Mathematics-II",
        credits: 3,
      },
      {
        code: "68151",
        name: "English",
        credits: 3,
      },
      {
        code: "68157",
        name: "Applied Physics",
        credits: 3,
      },
      {
        code: "69151",
        name: "Python Programming",
        credits: 3,
      },
      {
        code: "62151",
        name: "Basic Electrical and Electronics Engineering (EEE)",
        credits: 3,
      },
    ],
  ];

  const practicals1 = [
    [
      {
        code: "68131",
        name: "English Language Communication Skills Lab - I",
        credits: 1,
      },
      {
        code: "68133",
        name: "Engineering Chemistry Lab",
        credits: 1,
      },
      {
        code: "65131",
        name: "Computer Programming Lab",
        credits: 1.5,
      },
      {
        code: "67131",
        name: "IT Workshop Lab ",
        credits: 1,
      },
    ],
    [
      {
        code: "68181",
        name: "English Language Communication Skills Lab - II",
        credits: 1,
      },
      {
        code: "68187",
        name: "Applied Physics Lab",
        credits: 1,
      },
      {
        code: "69181",
        name: "Python Programming Lab",
        credits: 1.5,
      },
      {
        code: "62181",
        name: "Electrical and Electronics Engineering Lab",
        credits: 1.5,
      },
      {
        code: "63181",
        name: "Engineering Workshop",
        credits: 1,
      },
    ],
  ];

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
  const [firstYear, setFirstYear] = useState(false);
  const [secondYear, setSecondYear] = useState(false);
  const [thirdYear, setThirdYear] = useState(false);
  const [fourthYear, setFourthYear] = useState(false);

  const handleFirstYearClick = () => {
    setFirstYear((prevFirstYear) => !prevFirstYear);
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetY =
        rect.top + scrollTop - window.innerHeight / 2 + rect.height;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };
  const handleSecondYearClick = () => {
    setSecondYear((prevSecondYear) => !prevSecondYear);
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetY =
        rect.top + scrollTop - window.innerHeight / 2 + rect.height;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };
  const handleThirdYearClick = () => {
    setThirdYear((prevThirdYear) => !prevThirdYear);
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetY =
        rect.top + scrollTop - window.innerHeight / 2 + rect.height;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };
  const handleFourthYearClick = () => {
    setFourthYear((prevFourthYear) => !prevFourthYear);
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetY =
        rect.top + scrollTop - window.innerHeight / 2 + rect.height;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div class=" ml-12 mr-12 relative mt-4">
        <div className="relative h-64 header">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${dscover})`,
              filter: "blur(5px)",
            }}
          />
          <div
            className="absolute inset-0 flex justify-center items-center"
            id="aiml-heading"
          >
            <h1 className="text-5xl text-white font-bold">
              Department of Data Science
            </h1>
          </div>
        </div>

        <h1 class="pl-4 text-3xl font-semibold heading-top mt-10">
          About the Department
        </h1>
        <div>
          <div class="mt-5 text-justify">
            The Data Science Department at CVR College of Engineering stands as
            a dynamic center of excellence within the academic community,
            specializing in the multidisciplinary field of Data Science.
            Committed to fostering the next generation of data scientists and
            analytical leaders, the department places a strong emphasis on
            providing students with a comprehensive foundation in the principles
            and practices of data-driven decision-making. At the heart of the
            Data Science Department's mission is a carefully designed curriculum
            that integrates cutting-edge theories with hands-on applications.
            The department takes pride in offering a holistic learning
            experience that equips students not only with theoretical knowledge
            but also with practical skills in data analysis, machine learning,
            and statistical modeling. Guided by a distinguished faculty with
            expertise in diverse domains of data science, the department boasts
            state-of-the-art infrastructure and advanced labs. These resources
            empower students to explore, analyze, and derive meaningful insights
            from complex datasets, preparing them for the challenges of the
            rapidly evolving data landscape. Adopting a student-centric
            approach, the Data Science Department prioritizes holistic
            development through research opportunities, industry collaborations,
            and comprehensive career development programs. Students are
            encouraged to engage in real-world projects, internships, and
            collaborative initiatives that bridge the gap between academia and
            industry. The Data Science Department at CVR College of Engineering
            is dedicated to preparing students for successful careers in the
            dynamic and ever-expanding field of data science. By fostering a
            dynamic learning environment, the department strives to produce
            well-rounded professionals capable of leveraging data to drive
            innovation, solve complex problems, and make informed decisions. The
            commitment to excellence is evident in the department's unwavering
            dedication to shaping individuals who can thrive in the data-driven
            era.
          </div>{" "}
          <br />
        </div>

        <div className=" mr-12 mt-4">
          <h1 className="text-3xl font-semibold mb-4 heading-top pl-4">
            AI/ML Course Structure
          </h1>
          <div className="shadow-lg p-3 ring-4 ring-gray-300 rounded-lg">
            <div className="flex flex-col p-1 rounded-md">
              <div
                className="flex items-center cursor-pointer m-2 "
                onClick={handleFirstYearClick}
              >
                <RiArrowDropDownLine
                  className={`text-3xl mr-2 ${
                    firstYear ? "transform rotate-180" : ""
                  }`}
                />
                <h1 className="text-xl font-semibold user-select-none">
                  First Year
                </h1>
              </div>
              <div className="bg-gray-300 w-full h-0.5"></div>
              <div className={`${firstYear ? "" : "animation-fade-out"}`}>
                {firstYear && (
                  <div className="mt-4 animate-fade-in ml-5">
                    <div className="md:grid md:grid-cols-2 gap-8">
                      {[1, 2].map((semester) => (
                        <div key={semester} className="mb-8">
                          <h1 className="text-xl font-semibold mb-2">
                            Semester-{semester}
                          </h1>
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject Code
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Credits
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {courses1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td className="px-2 py-2 font-bold justify-center col-span-3 border border-gray-300">
                                  Practicals
                                </td>
                              </tr>
                              {practicals1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="flex items-center cursor-pointer m-2 "
                onClick={handleSecondYearClick}
              >
                <RiArrowDropDownLine
                  className={`text-3xl mr-2 ${
                    firstYear ? "transform rotate-180" : ""
                  }`}
                />
                <h1 className="text-xl font-semibold user-select-none">
                  Second Year
                </h1>
              </div>
              <div className="bg-gray-300 w-full h-0.5"></div>
              <div className={`${secondYear ? "" : "animation-fade-out"}`}>
                {secondYear && (
                  <div className="mt-4 animate-fade-in ml-5">
                    <div className="md:grid md:grid-cols-2 gap-8">
                      {[1, 2].map((semester) => (
                        <div key={semester} className="mb-8">
                          <h1 className="text-xl font-semibold mb-2">
                            Semester-{semester}
                          </h1>
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject Code
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Credits
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {courses1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td className="px-2 py-2 font-bold justify-center col-span-3 border border-gray-300">
                                  Practicals
                                </td>
                              </tr>
                              {practicals1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="flex items-center cursor-pointer m-2 "
                onClick={handleThirdYearClick}
              >
                <RiArrowDropDownLine
                  className={`text-3xl mr-2 ${
                    firstYear ? "transform rotate-180" : ""
                  }`}
                />
                <h1 className="text-xl font-semibold user-select-none">
                  Third Year
                </h1>
              </div>
              <div className="bg-gray-300 w-full h-0.5"></div>

              <div className={`${thirdYear ? "" : "animation-fade-out"}`}>
                {thirdYear && (
                  <div className="mt-4 animate-fade-in ml-5">
                    <div className="md:grid md:grid-cols-2 gap-8">
                      {[1, 2].map((semester) => (
                        <div key={semester} className="mb-8">
                          <h1 className="text-xl font-semibold mb-2">
                            Semester-{semester}
                          </h1>
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject Code
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Credits
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {courses1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td className="px-2 py-2 font-bold justify-center col-span-3 border border-gray-300">
                                  Practicals
                                </td>
                              </tr>
                              {practicals1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="flex items-center cursor-pointer m-2 "
                onClick={handleFourthYearClick}
              >
                <RiArrowDropDownLine
                  className={`text-3xl mr-2 ${
                    firstYear ? "transform rotate-180" : ""
                  }`}
                />
                <h1 className="text-xl font-semibold user-select-none">
                  Fourth Year
                </h1>
              </div>
              <div className="bg-gray-300 w-full h-0.5"></div>
              <div className={`${fourthYear ? "" : "animation-fade-out"}`}>
                {fourthYear && (
                  <div className="mt-4 animate-fade-in ml-5">
                    <div className="md:grid md:grid-cols-2 gap-8">
                      {[1, 2].map((semester) => (
                        <div key={semester} className="mb-8">
                          <h1 className="text-xl font-semibold mb-2">
                            Semester-{semester}
                          </h1>
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject Code
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Subject
                                </th>
                                <th className="py-2 px-4 bg-gray-200 border border-gray-300">
                                  Credits
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {courses1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td className="px-2 py-2 font-bold justify-center col-span-3 border border-gray-300">
                                  Practicals
                                </td>
                              </tr>
                              {practicals1[semester - 1].map((course) => (
                                <tr
                                  key={course.code}
                                  className="border border-gray-300"
                                >
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.code}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.name}
                                  </td>
                                  <td className="py-2 px-4 border border-gray-300">
                                    {course.credits}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div className="relative h-64 header mt-10 mb-2">
          
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
    </>
  );
}
