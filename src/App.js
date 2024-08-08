import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import backgroundImage from "../src/assets/back.png";
import backgroundImage2 from "../src/assets/back2.png";
import backgroundImage3 from "../src/assets/sidePic3.png";
import backgroundImage4 from "../src/assets/homeIcon.png";
import backgroundImage5 from "../src/assets/leftSide.png";
import backgroundImage6 from "../src/assets/thirdLeft.png";
import backgroundImage7 from "../src/assets/fourthSide.png";
import backgroundImage8 from "../src/assets/line.png";
import backgroundImage9 from "../src/assets/footer1.png";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "block",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
  },
  appBar: {
    marginBottom: theme.spacing(5),
    backgroundColor: "white",
    boxShadow: "none",
  },
  paper: {
    maxHeight: 450,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "29%",
    transform: "translate(-50%, -50%)",
    maxWidth: 450,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    boxShadow: "none",
    background: "none",
  },

  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right top",
    height: "90%",
    width: "100%",
  },

  image2: {
    backgroundImage: `url(${backgroundImage2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right bottom",
    height: "80%",
    width: "80%",
    borderRadius: 10,
    position: "absolute",
    right: 0,
    bottom: 50,
  },
  image3: {
    backgroundImage: `url(${backgroundImage3})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right bottom",
    height: "80%",
    width: "80%",
    borderRadius: 10,
    marginLeft: 40,
    right: 0,
    bottom: 50,
  },

  image4: {
    backgroundImage: `url(${backgroundImage4})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "15%",
    width: "15%",

    position: "absolute",
  },

  image5: {
    backgroundImage: `url(${backgroundImage5})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right bottom",
    height: "80%",
    width: "80%",
    borderRadius: 10,
    marginLeft: 40,
    right: 0,
    bottom: 50,
  },

  image6: {
    backgroundImage: `url(${backgroundImage6})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right bottom",
    height: "80%",
    width: "80%",
    borderRadius: 10,
    marginLeft: 40,
    right: 0,
    bottom: 50,
  },

  image7: {
    backgroundImage: `url(${backgroundImage7})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right bottom",
    height: "80%",
    width: "80%",
    borderRadius: 10,
    marginLeft: 40,
    right: 0,
    bottom: 50,
  },
  image8: {
    backgroundImage: `url(${backgroundImage8})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    height: 5,
    width: "100%",
  },

  image9: {
    backgroundImage: `url(${backgroundImage9})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 100,
    width: "100%",
  },

  signUpButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    backgroundColor: "#FF6969",
    borderRadius: 30,
    width: "100%",
    maxWidth: 300,
  },
  secDiv: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-evenly",
    marginTop: 60,
  },
  accountButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  SubsecDiv: {
    height: 400,
    width: 500,
  },
  button: {
    color: "#505F98",

    "&:hover": {
      backgroundColor: "#FDC614  ",
    },
    "&:active": {
      backgroundColor: "#FDC614 ",
    },
  },
  [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
    image2: {
      display: "none",
    },
    paper: {
      display: "flex",
      marginLeft: 67,
    },
    secDiv: {
      display: "flex",
      marginLeft: 35,
      width: 290,
      marginRight: 100,
    },
    SubsecDiv: {
      marginRight: 200,
    },
    image3: {
      display: "none",
    },
    image4: {
      display: "none",
    },
    image5: {
      display: "none",
    },
    image6: {
      display: "none",
    },
    image7: {
      display: "none",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Button className={classes.button} color="inherit">
              Home
            </Button>
            <Button className={classes.button} color="inherit">
              About
            </Button>
            <Button className={classes.button} color="inherit">
              Contact
            </Button>
            <p style={{ flexGrow: 1 }}></p>
            <Typography
              variant="h6"
              color="inherit"
              style={{ flexGrow: 1, color: "#0C134F", fontWeight: "700" }}
            >
              Technust Technologies
            </Typography>
            <button
              style={{
                padding: 5,
                width: 150,
                marginLeft: 100,
                backgroundColor: "#111B47",
                color: "#FFFFFF",
              }}
            >
              Buy Now
            </button>
          </Toolbar>
        </AppBar>
        <div className={classes.image}>
          <Grid container spacing={2}>
            <Grid item xs={16} sm={6}>
              <Paper className={classes.paper}>
                <Grid container spacing={2} alignItems="center">
                  <Typography
                    variant="h6"
                    color="inherit"
                    style={{
                      color: "#091133",
                      textAlign: "center",
                      fontSize: 35,
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: 20,
                      fontFamily: "Roboto",
                      fontWeight: "800",
                    }}
                  >
                    Introduce Your Product Quickly & Effectively
                  </Typography>
                  <div>
                    <Typography
                      variant="h6"
                      color="inherit"
                      style={{
                        color: "#505F98",
                        textAlign: "center",
                        fontSize: 16,

                        justifyContent: "flex-start",
                        marginBottom: 50,
                        fontFamily: "Roboto",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                      <br />
                      Donec quam felis, ultricies nec, pellentesque eu, pretium
                      quis, sem. Nulla consequat massa quis enim.
                    </Typography>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <button
                      style={{
                        padding: 5,
                        width: 150,
                        backgroundColor: "#111B47",
                        color: "#FFFFFF",
                      }}
                    >
                      Purchase UI Kit
                    </button>
                    <button
                      style={{
                        padding: 5,
                        width: 150,
                        marginLeft: 20,
                        backgroundColor: "#FFFFFF",
                        color: "#111B47",
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={16} sm={6}>
              <div className={classes.image2} />
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={classes.secDiv}>
        <div style={{ height: 400, width: 500 }}>
          <Typography
            style={{
              fontSize: 30,
              fontFamily: "Roboto",
              color: "#091133",
              fontWeight: "600",

              marginLeft: 50,
            }}
          >
            Light, Fast & Powerful
          </Typography>
          <Typography
            style={{
              fontSize: 15,
              fontFamily: "Roboto",
              color: "#6F7CB2",
              fontWeight: "500",
              marginTop: 5,
              marginLeft: 50,
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",

              justifyContent: "space-between",
              marginTop: 70,
              marginLeft: 50,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 200,
              }}
            >
              <div className={classes.image4} />

              <Typography style={{ marginTop: 40, color: "#091133" }}>
                Title Goes Here
              </Typography>
              <Typography
                style={{ fontSize: 12, marginTop: 5, color: "#5D6970" }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 200,
              }}
            >
              <div className={classes.image4} />

              <Typography style={{ marginTop: 40, color: "#091133" }}>
                Title Goes Here
              </Typography>
              <Typography
                style={{ fontSize: 12, marginTop: 5, color: "#5D6970" }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </Typography>
            </div>
          </div>
        </div>

        <div style={{ height: 500, width: 500 }}>
          <div className={classes.image3} />
        </div>
      </div>

      <div className={classes.secDiv}>
        <div style={{ height: 500, width: 500 }}>
          <div className={classes.image5} />
        </div>

        <div className={classes.SubsecDiv}>
          <Typography
            style={{
              fontSize: 30,
              fontFamily: "Roboto",
              color: "#091133",
              fontWeight: "600",
              marginTop: 150,
              marginLeft: 50,
            }}
          >
            Light, Fast & Powerful
          </Typography>
          <Typography
            style={{
              fontSize: 15,
              fontFamily: "Roboto",
              color: "#6F7CB2",
              fontWeight: "500",
              marginTop: 5,
              marginLeft: 50,
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </Typography>
        </div>
      </div>

      <div className={classes.secDiv}>
        <div style={{ height: 500, width: 500 }}>
          <div className={classes.image6} />
        </div>

        <div className={classes.SubsecDiv}>
          <Typography
            style={{
              fontSize: 30,
              fontFamily: "Roboto",
              color: "#091133",
              fontWeight: "600",
              marginTop: 150,
              marginLeft: 50,
            }}
          >
            Light, Fast & Powerful
          </Typography>
          <Typography
            style={{
              fontSize: 15,
              fontFamily: "Roboto",
              color: "#6F7CB2",
              fontWeight: "500",
              marginTop: 5,
              marginLeft: 50,
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </Typography>
        </div>
      </div>

      <div className={classes.secDiv}>
        <div style={{ height: 500, width: 500 }}>
          <div className={classes.image7} />
        </div>

        <div className={classes.SubsecDiv}>
          <Typography
            style={{
              fontSize: 30,
              fontFamily: "Roboto",
              color: "#091133",
              fontWeight: "600",
              marginTop: 150,
              marginLeft: 50,
            }}
          >
            Light, Fast & Powerful
          </Typography>
          <Typography
            style={{
              fontSize: 15,
              fontFamily: "Roboto",
              color: "#6F7CB2",
              fontWeight: "500",
              marginTop: 5,
              marginLeft: 50,
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </Typography>
        </div>
      </div>

      <div
        style={{
          height: 500,
          overflow: "hidden",
          backgroundColor: "#E7ECFF",
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          marginTop: 200,
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "Roboto",
            fontWeight: 700,
            justifyItems: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          A Price To Suit Everyone
        </Typography>

        <Typography
          style={{
            textAlign: "center",
            fontSize: 15,
            fontFamily: "Roboto",
            fontWeight: 500,
            justifyItems: "center",
            alignItems: "center",
            marginTop: 20,
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </Typography>

        <Typography
          style={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "Roboto",
            fontWeight: 800,
            justifyItems: "center",
            alignItems: "center",
            marginTop: 20,
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          $40
        </Typography>

        <button
          style={{
            width: 150,
            height: 40,
            marginTop: 30,
            backgroundColor: "#111B47",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontWeight: "700",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          Purchase Now
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#F0F0F0",
          height: 80,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          style={{
            marginTop: 30,
            color: "#37447E",
            fontSize: 15,
            fontFamily: "Roboto",
            fontWeight: "500",
            marginLeft: 20,
          }}
        >
          ©2023 copyRights
        </Typography>
        <Typography
          style={{
            marginTop: 22,
            color: "#37447E",
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Technust Technologies
        </Typography>
        <button
          style={{
            width: 150,
            height: 40,
            marginTop: 30,
            backgroundColor: "#111B47",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontWeight: "700",
            marginRight: 20,
          }}
        >
          Purchase Now
        </button>
      </div>
      <div className={classes.image8} />
    </div>
  );
};

export default LandingPage;
