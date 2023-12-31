import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import PostCreateButton from "../../../components/common/PostCreateButton";
import PostList from "../../../components/common/PostList";
import ThemeToggle from "../../../components/ui/ThemeToggle";

const Posts = () => {

  return (
    <main className="app">
      <AppBar
        color="secondary"
        position="fixed"
        sx={{ top: 0, bottom: 'auto', xs: 2, md: 3 }}
      >
        <Container maxWidth="string" sx={{ my: 2 }} classes={{ root: "header" }}>
          <Typography variant="h4">Posts</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ThemeToggle />
            <PostCreateButton />
          </div>
        </Container>
      </AppBar>
      <Container maxWidth="string" sx={{ my: 5 }} classes={{ root: "content" }}>
        <PostList />
      </Container>
    </main>
  )
}

export default Posts;
