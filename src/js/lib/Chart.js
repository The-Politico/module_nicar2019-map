import d3 from './utils/d3';
import * as topojson from 'topojson';

import ChartComponent from './base/ChartComponent';
import usmap from './data/us.json';
import unemployment from './data/data.json';

class ModuleNicar2019Map extends ChartComponent {
  defaultProps = {
    stroke: '#ccc',
    strokeWidth: '2px',
    fill: 'steelblue',
    onClick: (d) => { console.log(d); },
  }

  usmap = usmap;
  unemployment = unemployment;

  draw() {
    // Data processing
    const features = topojson.feature(usmap, usmap.objects.us_states);
    features.features.map(state => {
      state.currentUnemployment = unemployment.filter(d => d.State === state.properties.NAME)[0]['Dec-18'];
    });

    const props = this.props();

    const node = this.selection().node();
    const { width, height } = node.getBoundingClientRect();

    // SVG furniture
    const g = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', height);

    // Color scale
    const color = d3.scaleThreshold()
      .domain([1, 2, 3, 4, 5, 6, 7])
      .range(['#FFE5D8', '#FFC1AA', '#F59E82', '#E37E61', '#CC5F44', '#B2422C', '#972516', '#7A0001']);

    // Set up map
    const projection = d3.geoAlbersUsa()
      .fitSize([width, height], features);

    const path = d3.geoPath()
      .projection(projection);

    g.appendSelect('g')
      .attr('id', 'states')
      .selectAll('path')
      .data(features.features)
      .enter().append('path')
      .attr('d', path)
      .style('fill', d => color(d.currentUnemployment))
      .on('click', (d) => {
        props.onClick(d.properties.NAME);
      });

    return this;
  }
}

export default ModuleNicar2019Map;
