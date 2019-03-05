import React from 'react';
import debounce from 'lodash/debounce';

import { Colors } from 'politico-style';

import Chart from '../lib/Chart.js';

const { brand } = Colors;

class ChartContainer extends React.Component {
  chartContainer = React.createRef()
  chart = new Chart()
  state = {
    selectedState: null,
  };

  componentDidMount() {
    this.chart
      .selection(this.chartContainer.current)
      .props({
        highlightState: this.state.selectedState,
        onClick: (selectedState) => this.setState({ selectedState }),
      })
      .draw();

    // Add a listener to resize chart with the window
    window.addEventListener('resize', debounce(this.chart.draw, 250));
  }

  componentDidUpdate() {
    // Update the chart with the component
    this.chart
      .props({
        highlightState: this.state.selectedState,
      })
      .draw();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.chart.draw, 250));
  }

  // A method we'll pass down to our chart
  sendMessage = (message) => {
    window.alert(message);
  }

  render() {
    return (
      <div id='chart' ref={this.chartContainer} />
    );
  }
}

export default ChartContainer;
