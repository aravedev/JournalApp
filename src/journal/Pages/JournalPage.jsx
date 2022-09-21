import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { NoteView, NothingSelectedView } from "../../views";
import { ImageGallery } from "../components";
import { JournalLayout } from "../layout/JournalLayout";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NothingSelectedView></NothingSelectedView>
        {/*<NothingSelectedView></NothingSelectedView> */}
        {/*
        <NoteView></NoteView>
        <ImageGallery></ImageGallery>
       */}
      </JournalLayout>
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </>
  );
};

/*
 <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quia, commodi blanditiis, aliquam a dolores amet ullam nisi optio
          aspernatur neque veniam molestias. Quia amet consequuntur voluptatem
          sint saepe quaerat.
        </Typography>
*/
