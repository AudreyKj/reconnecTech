import React, {useEffect} from 'react';
import axios from 'axios';
import '../App.css';

function Profile() {

  useEffect(() => {

    //first check out in localStorage if user is donor or recipient
    axios.get('/profile/donor').then(({data}) => console.log('data', data.totalDonations));

    //{id: 2, recipient_id: 6, device_type: 'tablet', order_status: 'Order in Progress'}[]
    axios.get('/profile/recipient').then(({data}) => console.log('data', data));

  }, [])

  return (
    <div>
    </div>
  );
}

export default Profile;