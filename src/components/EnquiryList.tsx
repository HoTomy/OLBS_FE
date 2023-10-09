import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EnquiryList() {
  const [enqiiry, setEnquiries] = useState([]);

  useEffect(() => {
    // Fetch the list of enquiries from the API
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get('/api/enquiry');
        setEnquiry(response.data);
      } catch (error) {
        console.error('Error fetching enquiry:', error);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div>
      <h2>Enquiry List</h2>
      {enquiries.length === 0 ? (
        <p>No enquiry available</p>
      ) : (
        <ul>
          {enquiries.map((enquiry) => (
            <li key={enquiry.id}>
              <h3>{enquiry.name}</h3>
              <p>Email: {enquiry.email}</p>
              <p>enquiry: {enquiry.enquiry}</p>
              <p>Status: {enquiry.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EnquiryList;
