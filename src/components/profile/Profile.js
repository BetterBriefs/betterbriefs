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

  const [projectThumbnails, setProjectThumbnails] = useState([{}]);

  // database
  const projectsCollectionRef = collection(db, "projects");
  const userDocRef = doc(db, "users", uid);

  useEffect(() => {
    if (uid) {
      getProfile();
      getProjects();
    }
  }, [uid]);

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

    //iterate over projects and set thumbnails
    parsedData.forEach((project) => {
      getDownloadURL(ref(storage, project.thumbnail)).then((url) => {
        let result = url;
        let data = { id: project.id, url: result };
        console.log(result);
        setProjectThumbnails([...projectThumbnails, data]);
      });
    });
    setProjects(parsedData);
    console.log(projectThumbnails);
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

  function getImage(project) {
    let data = projectThumbnails.find((item) => item.id === project.id);
    if (data) return data.url;
    else return "";
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
              <img width="500" src={getImage(project)} alt="project"></img>
              <Button onClick={() => publishProject(project)}>Publish</Button>
            </div>
          ))}
        </>
      )}
    </>
  );
};
