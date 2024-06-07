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
export default function Footer({ theme }) {
  return (
    <>
      <Divider />
      <Stack
        sx={{
          minHeight: "400px",
          bgcolor: theme == "dark" ? "#212121" : "#3d3d3d",
          justifyContent: "start",
          p: " 30px 70px",
        }}>
        <Box>
          <img
            width='150px'
            height='100px'
            src={"assets/logo.png"}
            alt='logo'
          />
        </Box>
        <Stack
          direction={"row"}
          gap={"70px"}
          flexWrap={"wrap"}
          sx={{ p: "20px" }}>
          {/* about */}
          <Stack sx={{ p: "20px" }}>
            <Typography sx={{ color: "txt.three", marginBottom: "15px" }}>
              ABOUT
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Submit on issue
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Github repo
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                About
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Shock
              </Link>
            </Typography>
          </Stack>
          {/* resources */}
          <Stack sx={{ p: "20px" }}>
            <Typography sx={{ color: "txt.three", marginBottom: "15px" }}>
              GETTING
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Introduction
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Documentation
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Usage
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Globals
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Elements
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Collections
              </Link>
            </Typography>
          </Stack>
          {/* getting */}
          <Stack sx={{ p: "20px" }}>
            <Typography sx={{ color: "txt.three", marginBottom: "15px" }}>
              RESOURCES
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Api
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                From productions{" "}
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Visibility
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Accessibility
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Design defined
              </Link>
            </Typography>
            <Typography>
              <Link
                sx={{ fontSize: "14px", color: "txt.three" }}
                underline={"hover"}>
                Market place
              </Link>
            </Typography>
          </Stack>
          {/* social media */}
          <Stack sx={{ p: "20px" }}>
            <Typography sx={{ color: "txt.three", marginBottom: "15px" }}>
              SOCIAL MEDIA
            </Typography>
            <Box width={300}>
              <Typography>
                <Link
                  sx={{ fontSize: "14px", color: "txt.three" }}
                  underline={"hover"}>
                  Lorem ipsum is placeholder text commonly used in the graphic.
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
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}>
                  {/* github */}
                  <Link href={"https://github.com/barbodmsd"}>
                    <IconButton sx={{ color: "txt.one" }}>
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                </Stack>
                {/* instagram */}
                <Stack
                  sx={{
                    bgcolor: "#D9D9D9",
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}>
                  <Link href={"https://www.instagram.com/barbodmsd"}>
                    <IconButton sx={{ color: "txt.one" }}>
                      <InstagramIcon />
                    </IconButton>
                  </Link>
                </Stack>
                {/* telegram */}
                <Stack
                  sx={{
                    bgcolor: "#D9D9D9",
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}>
                  <Link href={"https://t.me/barbodmsd"}>
                    <IconButton sx={{ color: "txt.one" }}>
                      <TelegramIcon />
                    </IconButton>
                  </Link>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Divider />
        {/* terms and conditions */}
        <Stack
          sx={{ p: "20px 70px" }}
          direction={"row"}
          gap='30px'
          flexWrap='wrap'>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            © 2024 GitHub, Inc.
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            terms
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            Privacy
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            Security
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            Status
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            Docs
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            Content
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            Manage cookies
          </Link>
          <Link
            sx={{ fontSize: "14px", color: "txt.three" }}
            underline={"hover"}>
            Don not share my personal information
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
