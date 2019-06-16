import React, { Component } from "react";
import ControlPanel from "../../components/controlPanel";
import Display from "../../components/display";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      showDate: true
    };

    this.timer = null;
  }

  componentDidMount() {
    this.handleStartTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  handleStartTimer = () => {
    this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
  };

  toggleDateVisibility = () => {
    this.setState((prevState) => ({ showDate: !prevState.showDate }));
  };

  render() {
    const { date, showDate } = this.state;

    return (
      <div>
        <ControlPanel
          checked={showDate}
          onChange={this.toggleDateVisibility}
          value={showDate}
        />
        <Display date={date} showDate={showDate} />
      </div>
    );
  }
}

export default Clock;
