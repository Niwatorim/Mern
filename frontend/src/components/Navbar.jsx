import { Button, Container, Link, Stack, Typography } from "@mui/material";
import { FaCartPlus, FaLightbulb } from "react-icons/fa";

function Navbar() {
  return (
    <Container
      sx={{
        mw: "1140",
        padding: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        h: 4,
        flexDirection: {
          xs: "row",
          md: "column",
        },
      }}
    >
      <Typography
        variant="h1"
        align="left"
        color="grey.700"
        sx={{
          fontSize: { xs: 28, md: 22 },
          backgroundColor: "primary",
          backgroundImage: `linear-gradient(45deg,rgb(30, 184, 219),rgb(27, 31, 229))`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <Link href={"/"} underline="none">
          Product store
        </Link>
      </Typography>
      <Stack direction={"row"} spacing={2} alignItems="center">
        <Button>
          <Link href={"/create"}>
            <FaCartPlus />
          </Link>
        </Button>

        {/* Toggle theme using the global function */}
        <Button>
          <FaLightbulb />
        </Button>
      </Stack>
    </Container>
  );
}

export default Navbar;
