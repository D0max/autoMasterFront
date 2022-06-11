import React from 'react';
import Profile from '../components/Profile';

import {useGetPersonInfoQuery} from "../services/persons";

const ProfilePage = () => {
  const { data: person, error, isLoading } = useGetPersonInfoQuery('')
  console.log(person);
  return (
    <Profile person={person}/>
  );
};

export default ProfilePage;
