import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch the user's profile from the API
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Location: {profile.location}</p>
    </div>
  );
}

export default Profile;
