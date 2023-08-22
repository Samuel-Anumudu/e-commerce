"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";

export default function Navbar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      <button onClick={toggleDrawer("right", true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
        >
          <rect width="16" height="3" fill="white" />
          <rect y="6" width="16" height="3" fill="white" />
          <rect y="12" width="16" height="3" fill="white" />
        </svg>
      </button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Box
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">Login</Link>
            </li>
            <li>
              <Link href="">Register</Link>
            </li>
          </ul>
        </Box>
      </Drawer>
    </div>
  );
}

// export default Navbar;
