import React, { useState, useEffect } from "react";
import { storage, db } from "../../firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { Button } from "../button/Button";

export const Profile = () => {
  // userId from URL
  let { uid } = useParams();
  // profile data
  const [userProfile, setUserProfile] = useState(undefined);
  //projects from user
  const [projects, setProjects] = useState(undefined);

  // database
  const projectsCollectionRef = collection(db, "projects");
  const userDocRef = doc(db, "users", uid);

  useEffect(() => {
    if (uid) {
      getProfile();
      getProjects();
    }
  }, [uid]);

  //load project images from firebase
  // getDownloadURL(path).then((url) => {
  //   //console.log("the url");
  //   console.log(url);
  //   return url;
  // });

  async function getProfile() {
    const data = await getDoc(userDocRef);
    let parsedData = { ...data.data(), id: data.id };
    setUserProfile(parsedData);
  }

  async function getProjects() {
    const data = await getDocs(projectsCollectionRef);
    const parsedData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((project) => project.userId === uid);
    //todo: add imageurls to display thumbnail images with method getimageurl

    const parsedDataWithImage = parsedData.map((project) => ({
      ...project,
      //imageUrl: getImageUrl(project.thumbnail),
      imageurl: getDownloadURL(ref(storage, project.thumbnail)).then((url) => {
        return url;
        //console.log(url);
      }),
    }));
    setProjects(parsedDataWithImage);
  }

  function publishProject(project) {
    const docRef = doc(db, "projects", project.id);
    updateProject(docRef);
    getProjects();
  }

  function editProfile() {
    updateProfile();
    getProfile();
  }

  // Update project / dummy data for test purpose
  // Todo: create form which user submits to update project
  async function updateProject(projectDocRef) {
    await updateDoc(projectDocRef, {
      description: "A description for my done project",
      repo_link: "the link for my repo link",
      thumbnail: "the preview image",
      title: "A new title",
      published: true,
    });
  }

  // Update profile / dummy data for test purpose
  // Todo: create form which user submits to update profile
  async function updateProfile() {
    await updateDoc(userDocRef, {
      description: "A description about me",
      picture: "the link to profile picture",
    });
  }

  return (
    <>
      {userProfile && projects && (
        <>
          <div>Profile from {userProfile.name}</div>
          <div>Description: {userProfile.description}</div>
          <div>Picture: {userProfile.picture}</div>
          <Button onClick={editProfile}>Edit Profile</Button>
          <div>Projects</div>
          {projects.map((project) => (
            <div key={project.id}>
              <div>Title: {project.title}</div>
              <div>State: {project.published.toString()}</div>
              {/* TODO imageurl is undefined at this point, but after method it is correct */}
              <img src={project.imageurl} alt="project"></img>
              <Button onClick={() => publishProject(project)}>Publish</Button>
            </div>
          ))}
        </>
      )}
    </>
  );
};
