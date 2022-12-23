import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
  Grid
} from "@material-ui/core";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  padding: 10vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1 {
    color: ${props => props.theme.color};
  }
  p {
    color: ${props => props.theme.color};
  }
`;

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(2)
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

const App = () => {
  const themeState = useTheme();
  const [state, setState] = React.useState({
    checkedB: true
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const switchLabel = themeState.dark ? "dark mode" : "light mode";

  const pageTitle = themeState.dark ? "Dark" : "Light";

  return (
    <Wrapper>
      <h1>{pageTitle} Mode on</h1>
      <FormGroup>
        <FormControlLabel
          control={
            <IOSSwitch
              checked={state.checkedB}
              onClick={() => themeState.toggle()}
              onChange={handleChange("checkedB")}
              value="checkedB"
            />
          }
          label={switchLabel}
        />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <p>dark mode</p>
            <Grid item>
              <IOSSwitch
                checked={state.checkedB}
                onClick={() => themeState.toggle()}
                onChange={handleChange("checkedB")}
                value="checkedB"
              />
            </Grid>
            <p>light mode</p>
          </Grid>
        </Typography>
      </FormGroup>
    </Wrapper>
  );
};

export default App;
