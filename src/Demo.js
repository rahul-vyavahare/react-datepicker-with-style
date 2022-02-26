import React from "react";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/fontawesome-free-solid";
const styles = (theme) => ({
  root: {
    // - The TextField-root
    "& label.Mui-focused": {
      color: "green !important"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green !important",
      borderRadius: "8px !important"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // borderColor: 'green',
        borderColor: "rgba(0, 0, 0, 0.23)",
        borderRadius: "8px !important"
      },
      "&:hover fieldset": {
        borderColor: "green !important",
        borderRadius: "8px !important"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green !important",
        borderRadius: "8px !important"
      }
    }
  },
  customOutline: {
    "& label.Mui - focused": {
      color: "green !important"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: " rgba(0, 0, 0, 0.23):"
      },
      "&:hover fieldset": {
        borderColor: "green !important"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green !important"
      }
    }
  },
  label: {
    "&.Mui-focused": {
      color: "green !important"
    }
  }
});

class Demo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: null
    };
  }
  handleChange = () => (e) => {
    this.setState({ date: e });
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <div style={{ display: "grid" }}>
          <DatePicker
            customInput={
              <TextField
                type="text"
                variant="outlined"
                margin="none"
                InputLabelProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Nunito Sans SemiBold",
                    backgroundColor: "#FFFFFF"
                  }
                }}
                style={{
                  width: "385px",
                  marginTop: "5px",
                  borderRadius: "8px"
                }}
                size="small"
                label="Date"
                id="date"
                name="date1"
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <FontAwesomeIcon
                      icon="fa fa-calendar"
                      aria-hidden="true"
                      style={{ color: "#479AEA" }}
                    />
                  )
                }}
                onClick={this.props.onClick}
              >
                {this.props.value}
              </TextField>
            }
            selected={this.state.date}
            onChange={this.handleChange()}
            dateFormat="MMMM d, yyyy"
          />
          <h6> DatePicker with style</h6>
          <DatePicker
            customInput={
              <TextField
                type="text"
                variant="outlined"
                margin="none"
                InputLabelProps={{
                  style: {
                    fontSize: "13px",
                    fontFamily: "Nunito Sans SemiBold",
                    backgroundColor: "#FFFFFF"
                  }
                }}
                className={classes.root}
                style={{
                  width: "385px",
                  marginTop: "5px",
                  borderRadius: "8px"
                }}
                size="small"
                label="Date"
                id="Date"
                name="date"
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <FontAwesomeIcon
                      icon={faCalendar}
                      aria-hidden="true"
                      style={{ color: "#064E25" }}
                    />
                  )
                }}
                onClick={this.props.onClick}
              >
                {this.props.value}
              </TextField>
            }
            selected={this.state.date}
            onChange={this.handleChange()}
            dateFormat="MMMM d, yyyy"
            className={classes.root}
          />
        </div>
      </>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Demo);
