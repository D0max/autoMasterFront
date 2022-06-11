import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import React from 'react';
import {Container} from "../../Assets/styles";
import ProfileHeader from "./ProfileHeader";
import {ProfileBody, ProfileButton} from './styles';
import { useUpdatePersonMutation } from '../../services/persons';

const Profile = ({person}: any) => {
  const [
    updatePerson
  ] = useUpdatePersonMutation()
  const {username} = person;
  const formik = useFormik({
    initialValues: {
      username: person.username,
      email: person.email,
      age: person.age,
      create_at: person.create_at,
      role: person.role,
      update_date: person.update_date,
      img: person.img
    },
    onSubmit(value) {
      console.log(value.img.name);
      updatePerson({id: person._id, ...value, img: value.img.name})
    },
    onReset(e) {
      console.log(e);
    }
  })
  // @ts-ignore
  return (
    <Container>
      <ProfileHeader username={username}/>
      <ProfileBody>
        <span className="p-input-icon-left p-float-label">
          <i className="pi pi-envelope" />
          <InputText name="email" value={formik.values.email} onChange={formik.handleChange} />
          <label htmlFor="email">Email</label>

        </span>
        <span className="p-input-icon-left p-float-label">
          <i className="pi pi-user" />
          <InputText name="username" value={formik.values.username} onChange={formik.handleChange} />
          <label htmlFor="username">Username</label>
        </span>
        <span className="p-input-icon-left p-float-label">
          <i className="pi pi-calendar" />
          <InputText name="age" value={formik.values.age} onChange={formik.handleChange} />
          <label htmlFor="age">Age</label>
        </span>
        <span className="p-float-label">
          <InputText name="create_at" value={new Date(formik.values.create_at).toLocaleDateString()} onChange={formik.handleChange} disabled />
          <label htmlFor="create_at">Create At</label>
        </span>
        <span className="p-float-label">
          <InputText name="role" value={formik.values.role} onChange={formik.handleChange} disabled />
          <label htmlFor="role">Role</label>
        </span>
        <span className="p-float-label">
          <InputText name="update_date" value={new Date(formik.values.update_date).toLocaleDateString()} onChange={formik.handleChange} disabled />
          <label htmlFor="update_date">Update Date</label>
        </span>
      </ProfileBody>
      <ProfileButton>
        <FileUpload name="img" uploadHandler={(e) => {
          formik.setFieldValue('img', e.files[0])
          console.log(e);
        }}
          mode="basic"
          customUpload
        />
        <Button onClick={(e: any) => formik.handleSubmit(e)} label="Submit" icon="pi pi-check" className="p-button-rounded" />
        <Button onClick={() => formik.resetForm()} label="Reset" icon="pi pi-times" className="p-button-rounded p-button-secondary"/>
      </ProfileButton>
    </Container>
  );
};

export default Profile;
