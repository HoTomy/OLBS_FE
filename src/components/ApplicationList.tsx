import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApplicationList() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch the list of applications from the API
    const fetchApplications = async () => {
      try {
        const response = await axios.get('/api/applications');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Application List</h2>
      {applications.length === 0 ? (
        <p>No applications available</p>
      ) : (
        <ul>
          {applications.map((application) => (
            <li key={application.id}>
              <h3>{application.name}</h3>
              <p>Email: {application.email}</p>
              <p>Position: {application.position}</p>
              <p>Status: {application.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApplicationList;
