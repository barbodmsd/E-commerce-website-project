import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import logo from './../../../public/assets/logo.png'
export default function Footer({ theme }) {
  return (
    <>
      <Divider />
      <Stack
        sx={{
          minHeight: "400px",
          bgcolor: theme == "dark" ? "#212121" : "#3d3d3d",
          justifyContent: "start",
          p: { xs: "20px 30px", md: "20px 70px" },
        }}>
        <Box>
          <img
            width='150px'
            height='100px'
            src={logo}
            alt='logo'
          />
        </Box>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          sx={{
            gap: { md: "70px" },
            justifyContent: { xs: "center", sm: "space-evenly" },
          }}>
          {/* about */}
          <Stack sx={{ p: "10px" }}>
            <Typography
              sx={{
                color: "txt.three",
                marginBottom: "15px",
                fontSize: "1em",
              }}>
              ABOUT
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Submit on issue
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Github repo
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                About
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Shock
              </Link>
            </Typography>
          </Stack>
          {/* resources */}
          <Stack sx={{ p: "10px" }}>
            <Typography
              sx={{
                color: "txt.three",
                marginBottom: "15px",
                fontSize: "1em",
              }}>
              GETTING
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Introduction
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Documentation
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Usage
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Globals
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Elements
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Collections
              </Link>
            </Typography>
          </Stack>
          {/* getting */}
          <Stack sx={{ p: "10px" }}>
            <Typography
              sx={{
                color: "txt.three",
                marginBottom: "15px",
                fontSize: "1em",
              }}>
              RESOURCES
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Api
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                From productions{" "}
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Visibility
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Accessibility
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Design defined
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: ".7em", color: "txt.three" }}
                underline={"hover"}>
                Market place
              </Link>
            </Typography>
          </Stack>
          {/* social media */}
          <Stack sx={{ p: "10px", alignItem: { xs: "center", md: "none" } }}>
            <Typography
              sx={{
                color: "txt.three",
                marginBottom: { xs: "0", md: "15px" },
                fontSize: "1em",
              }}>
              SOCIAL MEDIA
            </Typography>
            <Stack>
              <Typography>
                <Link
                  sx={{
                    fontSize: ".7em",
                    color: "txt.three",
                    display: { xs: "none", md: "inline-block" },
                  }}
                  underline={"hover"}>
                  Loem ipsum is placeholder text <br /> commonly used in the
                  graphic.
                </Link>
              </Typography>
              <Stack
                flexWrap={"wrap"}
                direction={"row"}
                gap={"10px"}
                sx={{ py: "20px" }}>
                <Stack
                  sx={{
                    bgcolor: "#D9D9D9",
                    width: { xs: 30, sm: 40 },
                    height: { xs: 30, sm: 40 },
                    position: "relative",
                    borderRadius: "10px",
                  }}>
                  {/* github */}
                  <Link href={"https://github.com/barbodmsd"}>
                    <IconButton
                      sx={{
                        color: "txt.one",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      }}>
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                </Stack>
                {/* instagram */}
                <Stack
                  sx={{
                    bgcolor: "#D9D9D9",
                    width: { xs: 30, sm: 40 },
                    height: { xs: 30, sm: 40 },
                    position: "relative",
                    borderRadius: "10px",
                  }}>
                  <Link href={"https://www.instagram.com/barbodmsd"}>
                    <IconButton
                      sx={{
                        color: "txt.one",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      }}>
                      <InstagramIcon />
                    </IconButton>
                  </Link>
                </Stack>
                {/* telegram */}
                <Stack
                  sx={{
                    bgcolor: "#D9D9D9",
                    width: { xs: 30, sm: 40 },
                    height: { xs: 30, sm: 40 },
                    position: "relative",
                    borderRadius: "10px",
                  }}>
                  <Link href={"https://t.me/barbodmsd"}>
                    <IconButton
                      sx={{
                        color: "txt.one",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      }}>
                      <TelegramIcon />
                    </IconButton>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        {/* terms and conditions */}
        <Stack
          sx={{
            gap: { xs: "10px", sm: "20px" },
            p: { xs: "20px 10px", md: "20px 70px" },
          }}
          direction={"row"}
          flexWrap='wrap'>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            © 2024 GitHub, Inc.
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            terms
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            Privacy
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            Security
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            Status
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            Docs
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            Content
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            Manage cookies
          </Link>
          <Link
            sx={{ fontSize: ".7em", color: "txt.three" }}
            underline={"hover"}>
            Don not share my personal information
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
