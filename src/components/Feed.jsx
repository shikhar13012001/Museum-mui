import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import Details from "./Details";
import { Box } from "@mui/system";

const Feed = (props) => {
  const { ImageSet } = props;
  const ObjectKeys = Object.keys(ImageSet);
  return (
    <Container sx={{ width: "100%", minHeight: "100vh" }}>
      {ObjectKeys.map((key, index) => {
        const First = ImageSet[key][0];
        return (
          <React.Fragment>
            <Parallax speed={Math.random() * 10}>
              <Typography variant="h1" color="textSecondary" align="left">
                {key}
              </Typography>
            </Parallax>
            <Grid
              container
              columns={12}
              spacing={1}
              sx={{ width: "100%", minHeight: "100vh", mb: 20 }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h2">{First.title}</Typography>
                <Box>
                  <Details artifact={First} />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Parallax speed={Math.random() * 10}>
                  <img
                    src={First.primaryImage}
                    alt="highlight"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Parallax>
              </Grid>
              {ImageSet[key].slice(1, 4).map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Stack
                        sx={{
                          width: "90%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <img
                          src={item.primaryImage}
                          alt="highlight"
                          style={{ width: "100%", height: "auto" }}
                        />

                        <Details artifact={item} />
                      </Stack>
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default Feed;
