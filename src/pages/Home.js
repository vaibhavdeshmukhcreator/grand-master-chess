import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
} from "@mui/material";
import { Dimensions } from "react-native";
import { deepOrange } from "material-ui/colors";
import { episodes } from "../shared/Episodes";

function Home() {
  const { height, width } = Dimensions.get("window");

  return (
    <div>
      {episodes.map((ep) => (
        <Card
          key={ep.number}
          variant="outlined"
          style={{
            marginTop: height * 0.02,
            marginLeft: width * 0.01,
            marginRight: width * 0.01,
          }}
        >
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to="/quiz"
            state={ep}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: deepOrange[500],
                    width: 36,
                    height: 36,
                    alignItems: "center",
                    typography: "h6",
                  }}
                  variant="rounded"
                >
                  {ep.number}
                </Avatar>
              }
              title={ep.match}
              titleTypographyProps={{ variant: "h5" }}
              subheaderTypographyProps={{ variant: "h6" }}
              subheader={ep.venue}
            />
            <CardContent>
              <Typography variant="h2">{ep.guest}</Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default Home;
