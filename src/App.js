import { makeStyles } from "@mui/styles";
import "./App.css";
import Header from "./components/layouts/Header";
import SideMenu from "./components/layouts/SideMenu";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
    </>
  );
}

export default App;
