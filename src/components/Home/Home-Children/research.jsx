import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Research() {
    const [filterType, setFilterType]=useState("");
    const [publication, setPublication]=useState("");
    const [workshop, setWorkshop]=useState("");
    const [faculty, setFaculty]=useState("");
    const [selectedType, setSelectedType] = useState('');
    const [selectedType1, setSelectedType1] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:9000/getPublication")
        .then((res)=>{
            //console.log(res.data.details);
            setPublication(res.data.details);
           console.log("Publications", publication);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    useEffect(()=>{
        axios.get("http://localhost:9000/getWorkshop")
        .then((res)=>{
        
            setWorkshop(res.data.details);
            //console.log("Workshop", workshop);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
  };

  const handleTypeChange1 = (event1) => {
    setSelectedType1(event1.target.value);
};

const handleYearChange = (event) => {
  setSelectedYear(event.target.value);
};

let filteredPublications = publication;

if (selectedType !== '') {
  filteredPublications = filteredPublications.filter(publication => publication.journal === selectedType);
}

if (selectedYear !== '') {
  filteredPublications = filteredPublications.filter(publication => new Date(publication.year_of_publication).getFullYear() === parseInt(selectedYear));
}

      const filteredWorkshops = selectedType1 === '' ? workshop
      : workshop.filter(workshop => workshop.type === selectedType1);


  return (
    <div>


{ publication && (
  <div>
<div className='ml-5'><h1 className="m-10 pl-6 text-3xl font-semibold heading-top">Publications</h1></div>
            <div className='flex flex-cols'>
              <div className='pr-5 pl-5 '>
                <label htmlFor="typeSelect">Filter By Type: </label>
                <select id="typeSelect" value={selectedType} onChange={handleTypeChange}>
                    <option value="">All</option>
                    <option value="SCI">SCI</option>
                    <option value="SCIE">SCIE</option>
                    <option value="Scopus">Scopus</option>
                    <option value="IEEE Explore">IEEE Explore</option>
                </select>
            </div>
            <div className='pl-5'>
                <label htmlFor="yearSelect">Filter By Year: </label>
                <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
                    <option value="">All</option>
                    {[...new Set(publication.map(publication => new Date(publication.year_of_publication).getFullYear()))].map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            </div>
            {publication && (
                <div className="table-container">
                    <table className='m-auto '>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Faculty Name</th>
                                <th>Type</th>
                                <th>Year of Publication</th>
                            </tr>
                        </thead>

                        <tbody className=''>
                            {filteredPublications.map((item, index) => (
                                <tr key={index}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.facultyName}</td>
                                    <td>{item.journal}</td>
                                    <td>{item.year_of_publication.substring(0,10)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
                </div>
)}


{workshop && (
  <div>
                <div className='ml-5'><h1 className="m-10 pl-6 text-3xl font-semibold heading-top">Workshops</h1></div>
                <div className='pl-5'>
                  <label htmlFor="typeSelect1">Filter By Type: </label>
                  <select id="typeSelect1" value={selectedType1} onChange={handleTypeChange1}>
                      <option value="">All</option>
                      <option value="FDP">FDP</option>
                      <option value="SDP">SDP</option>
                      <option value="Conference">Conference</option>
                      <option value="Webinar">Webinar</option>
                  </select>
                </div>
                { workshop && (
                <div className="table-container">
                    <table className='m-auto'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Faculty Name</th>
                                <th>Organized By</th>
                                <th>Scope</th>
                                <th>Type</th>
                                <th>
                                  Start Date
                                </th>
                                <th>
                                  End Date
                                </th>
                                
                                
                                
                            </tr>
                        </thead>
                        <tbody className=''>
                            {filteredWorkshops.map((item, index) => (
                                <tr key={index}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.facultyName}</td>
                                    <td>{item.organizedBy}</td>
                                    <td>{item.scope}</td>
                                    <td>{item.type}</td>
                                    <td>{item.startDate.substring(0,10)}</td>
                                    <td>{item.endDate.substring(0, 10)}</td>
                                    
                                
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)}
      </div>
    
      )}

    { /* publication && (
        <div>

        {publication.map((item, index) => (
            <p key={index}>{item.title}</p>
        ))}

        {workshop.map((item, index) => (
            <p key={index}>{item.title}</p>
        ))}

        
        </div>
    )*/};
    </div>
  );
}
