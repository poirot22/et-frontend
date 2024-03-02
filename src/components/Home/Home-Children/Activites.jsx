import React from 'react';
import './Activites.css';

export default function Activites() {
  return (
    <div className='ml-5'>
      <div className='mb-10'>
      <h1 className="m-10 pl-6 text-3xl font-semibold heading-top">Workshops Conducted </h1>
      <div className="table-container">
        <table className='m-auto '>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cyber Security and Ethical Hacking Workshop</td>
              <td>Ajinkya Lohakare, Certified Ethical Hacker, CTO Ditto Security, Josh talk and TEDx Speaker</td>
              <td>25th - 28th November 2022</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Big Data Analytics Workshop</td>
              <td>Avula Narsi Reddy, Associate Technical Architect, Legato Heatlh Technologies
              <br/>
              Pasula Praneeth Reddy, Data Anaytics Consultant, Capgemini Technologies.
              </td>
              
              <td>2nd - 3rd December 2022</td>
            </tr>
            <tr >
              <td>3</td>
              <td>Faculty Outreach Program</td>
              <td>Mr. k. Sai Anuradh, Research Scholar, BITS Pilani.
              <br/>
                Dr. BSAS Rajitha, BITS Pilani
              </td>
              <td>9th - 10 th December 2022</td>
            </tr>
            
          </tbody>
        </table>
      </div>
      </div>

    <h1 className="m-10 pl-6 text-3xl font-semibold heading-top">Other Activities</h1>
    <div className="table-container">
      <table className='m-auto'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Speaker</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ET Department Fest - Synergy</td>
            <td>
              <ul className="pl-5">
                <li>Total of 18 events out of which 11 are technical events, 7 are non-technical events.</li>
                <li>Through this event the students were able to test their technical skills and their strength, position of their competitiveness in their extracurricular activities.</li>
                <li>A total of 600 students have participated from various departments.</li>
              </ul>

            </td>
            <td>6th - 7th October 2023</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Social Outreach Program</td>
            <td>
              <ul className="pl-5">
                <li>Conducted Social Outreach program for the Students of ZPHS, Sheriguda with the support the the college management.</li>
                <li>Total of 70 students participated in the program and has learnt basics of computer and related tools.</li>
                <li>College management donated computers for the school. </li>
                <li></li>
              </ul>
            </td>
            
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Faculty Outreach Program</td>
            <td>
            <ul className="pl-5">
                <li>Conducted Social Outreach program for the Teachers of the govt school.</li>
                <li>Total of 70 students participated in the program and has learnt computer tools such as Excel, Powerpoint etc..</li>
              </ul>
            </td>
            <td></td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>

  )
}