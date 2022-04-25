import React, { useState, useEffect } from "react";
import { storage, db } from "../../firebase-config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";

export const Profile = () => {
  let { uid } = useParams();
  const [userProfile, setUserProfile] = useState(undefined);
  const [projects, setProjects] = useState(undefined);

  const projectsCollectionRef = collection(db, "projects");

  useEffect(() => {
    if (uid) {
      getProfile();
      getProjects();
    }
  }, [uid]);

  //load project images from firebase
  function getImageUrl(thumbnail) {
    const path = ref(storage, thumbnail);

    getDownloadURL(path).then((url) => {
      // Insert url into an <img> tag
      console.log("the url");
      console.log(url);
      return url;
    });
  }

  async function getProfile() {
    const docRef = doc(db, "users", uid);
    const data = await getDoc(docRef);
    let parsedData = { ...data.data(), id: data.id };
    setUserProfile(parsedData);
  }

  async function getProjects() {
    const data = await getDocs(projectsCollectionRef);
    const parsedData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((project) => project.userId === uid);
    //todo: add imageurls with method getimageurl

    setProjects(parsedData);
  }

  return (
    <>
      {userProfile && projects && (
        <>
          <div>Profile from {userProfile.name}</div>
          <div>Projects</div>
          {projects.map((project) => (
            <>
              <div>Title: {project.title}</div>
              <div>State: {project.published.toString()}</div>
              {/* TODO imageurl is undefined at this point, but after method it is correct */}
              <img src={getImageUrl(project.thumbnail)} alt="project"></img>
            </>
          ))}
        </>
      )}
    </>
  );
};
