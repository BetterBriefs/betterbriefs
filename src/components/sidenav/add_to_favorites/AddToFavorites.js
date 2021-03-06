import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import { SidenavElement } from "../../functional/sidenav_element/SidenavElement";
import { Overlay } from "../../functional/overlay/Overlay";
import addToFolderSound from "../../../media/notification.mp3";
import alreadyInFolderSound from "../../../media/stop.mp3";

export const AddToFavorites = ({ brief, onFavoritesChange }) => {
  const navigate = useNavigate();
  let { seed } = useParams();
  const [open, setOpen] = React.useState(false);
  const [dialogText, setDialogText] = useState(
    "This brief was added to your favorites list."
  );

  const addToFavorites = useCallback(() => {
    const currentFavorites = JSON.parse(localStorage.getItem("brief")) || [];
    const isDuplicate = currentFavorites.find(
      uniqueBrief => uniqueBrief.seed === seed
    )
      ? true
      : false;

    if (!isDuplicate) {
      currentFavorites.push({ ...brief.idea, ...brief.color, seed: seed });
      localStorage.setItem("brief", JSON.stringify(currentFavorites));
      setDialogText("This brief was added to your favorites list.");
      onFavoritesChange(currentFavorites);
      new Audio(addToFolderSound).play();
    } else {
      setDialogText("Already in Favorites");
      new Audio(alreadyInFolderSound).play();
    }
  }, [brief.color, brief.idea, onFavoritesChange, seed]);

  const handleClickOpen = useCallback(() => {
    addToFavorites();
    setOpen(true);
  }, [addToFavorites]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const navToFavorites = useCallback(() => {
    handleClose();
    navigate("/favorites");
  }, [handleClose, navigate]);

  return (
    <>
      <SidenavElement
        hoverText="Add to Favorites"
        handleClickOpen={handleClickOpen}
      >
        <StarOutlineRoundedIcon fontSize="large"/>
      </SidenavElement>
      <Overlay
        handleOpen={open}
        handleClose={handleClose}
        buttonText="Go to Favorites"
        buttonFunction={navToFavorites}
      >
        <p>{dialogText}</p>
      </Overlay>
    </>
  );
};
