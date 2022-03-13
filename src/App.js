import "./styles.css";
import Navbar from "./components/navbar";
import { Box, Container, Toolbar } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(20)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </div>
  );
}
