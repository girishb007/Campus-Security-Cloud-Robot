import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { Redirect } from "react-router";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import UserNavbar from "../Navbar/UserNavbar";
// import simulationCloudConfig from "../../simulationCloudConfig";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import LandingPage from "../LandingPage/LandingPage";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  table: {
    width: "82%",
  },
  fieldset: {
    margin: "4%",
    border: "1px solid #ccc",
  },
});

function makeid(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

let simulationName = "";
//var history=useHistory();
class Robot extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      robotList: [{
        "name": "Security Robo 1",
        "version":"LATEST",
        "os":"ROS",
        "robotType":"MOBILE",
        "manufacterer":"AWS"
      },
      {
        "name": "Security Robo 2",
        "version":"LATEST",
        "os":"ROS",
        "robotType":"MOBILE",
        "manufacterer":"AWS"
      }],
      accountId: 0,
      disableStartButton: false,
      disableStopButton: false,
      selectedRobot: "",
      currentSimulation: "",
      currentSimulationARN: "",
      simulationList: [],
    };
  }
  handleStartSimulation2 =()=>{
    alert("Robot simulation is Started");
  // this.props.history.push("/navigation");
  }
  handlePauseSimulation2 =()=>{
    alert("Robot simulation is Paused");
  // this.props.history.push("/navigation");
  }
  // componentDidMount() {
  //     axios.get(`${simulationCloudConfig}/aws_robomaker/list_robots`)
  //         .then((response) => {
  //             this.setState({robotList : response.data.message.simulations});
  //             this.setState({ accountId: response.data.message.account_id });
  //         })
  //         .catch(err => {
  //             console.log(err.response);
  //         });

  //     axios.get(`${simulationCloudConfig}/users/getSimulations/${localStorage.getItem("email")}`)
  //         .then((response) => {
  //             this.setState({ simulationList : response.data });
  //         })
  //         .catch(err => {
  //             console.log(err.response);
  //         });
  // }

  render() {
    // const handleStartSimulation1 = (event) => {
    //     history.push("/navigation");
    // }

    // const handleStartSimulation2 = (event) => {
    //     event.preventDefault();//stop refresh
    //     axios.post(`${simulationCloudConfig}/aws_robomaker/start_simulation/type/2`)
    //         .then((response) => {
    //             let simulation_Id = response.data.message.arn;
    //             let splitId = simulation_Id.split('/')[1];
    //             this.setState({ currentSimulation : splitId });
    //             this.setState({ currentSimulationARN : simulation_Id });

    //             axios.post(`${simulationCloudConfig}/users/startSimulation`, {
    //                 simulationName: splitId,
    //                 simulationType: 2,
    //                 email: localStorage.getItem("email"),
    //                 robotName: this.state.selectedRobot
    //             })
    //                 .then((response) => {
    //                     alert("Simulation started successfully.");
    //                     this.props.history.push('/robot');
    //                 })
    //                 .catch(err => {
    //                     console.log(err.response);
    //                 });
    //         })
    //         .catch(err => {
    //             console.log(err.response);
    //         });
    // }

    // const handleChange = (event) => {
    //     this.setState({ selectedRobot: event.target.value });
    // }

    // const handleStopSimulation = (event) => {
    //     event.preventDefault();//stop refresh
    //     let sim = event.target.parentNode.parentNode.parentNode.childNodes[0].innerHTML;

    //     axios.post(`${simulationCloudConfig}/aws_robomaker/stop_simulation/${sim}`)
    //         .then((response) => {

    //             axios.post(`${simulationCloudConfig}/users/stopSimulation`, {
    //                 simulationName: sim,
    //             })
    //                 .then((response) => {
    //                     alert("Simulation stopped successfully.");
    //                     this.props.history.push('/robot');
    //                 })
    //                 .catch(err => {
    //                     console.log(err.response);
    //                 });
    //         })
    //         .catch(err => {
    //             console.log(err.response);
    //         });
    // };

    const { classes } = this.props;
    let redirectVar = null;
    if (!localStorage.getItem("email")) {
      redirectVar = <Redirect to="/" />;
    }

    return (
      <div>
        {/* {redirectVar} */}
        {/* <UserNavbar /> */}
        <div>
          <br />
          <br />
          <br />
        
        </div>
        <div>
          <fieldset>
            <legend>Start Simulations</legend>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Robots</TableCell>
                    <TableCell align="left">START</TableCell>
                    <TableCell align="left">PAUSE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="demo-simple-select-outlined-label">
                          Robots
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="ddlRobots"
                          label="Robots"
                          //   onChange={handleChange}
                        >
                          {this.state.robotList.map((row) => (
                            <MenuItem
                              value={row.name.replace(
                                "deliverychallenge",
                                "cmpe281"
                              )}
                            >
                              {row.name.replace("deliverychallenge", "cmpe281")}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.button}
                         onClick={this.handleStartSimulation2}
                      >
                        Start Simulation
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.button}
                        onClick={this.handlePauseSimulation2}

                        // onClick={handleStartSimulation1}
                      >
                        Pause Simulation
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </fieldset>
        </div>
        {/* <div>
          <fieldset>
            <legend>Simulation List</legend>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Simulation Name</TableCell>
                    <TableCell align="left">Start Time</TableCell>
                    <TableCell align="left">End Time</TableCell>
                    <TableCell align="left">Robot Name</TableCell>
                    <TableCell align="left">Type</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Stop</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.simulationList.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.simulationName}
                      </TableCell>
                      <TableCell align="left">{row.starttime}</TableCell>
                      <TableCell align="left">{row.endtime}</TableCell>
                      <TableCell align="left">{row.robotName}</TableCell>
                      <TableCell align="left">{row.simulationType}</TableCell>
                      <TableCell align="left">{row.user_email}</TableCell>
                      <TableCell>
                        {(() => {
                          if (row.endtime !== null) {
                            return (
                              <Button
                                disabled={true}
                                variant="contained"
                                size="large"
                                color="primary"
                                className={classes.button}
                                // onClick={handleStopSimulation}
                              >
                                Stop Simulation
                              </Button>
                            );
                          } else {
                            return (
                              <Button
                                disabled={false}
                                variant="contained"
                                size="large"
                                color="primary"
                                className={classes.button}
                                // onClick={handleStopSimulation}
                              >
                                Stop Simulation
                              </Button>
                            );
                          }
                        })()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </fieldset>
        </div> */}
      </div>
    );
  }
}

export default withRouter(withStyles(useStyles)(Robot));
