![POLITICO](https://www.politico.com/interactives/cdn/images/badge.svg)

# module-nicar2019-map

A reusable chart module made with ❤️.

![](preview.png)

### Install
```bash
$ yarn add git+ssh://git@github.com:The-Politico/module-nicar2019-map
```

### Use

##### In the browser

Include any dependencies, your stylesheet and the minified bundle, which defines a global chart object, `ModuleNicar2019Map`.

```html
<!-- head -->
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="chart.min.js"></script>
<link rel="stylesheet" type="text/css" href="styles.css">

<!-- body -->
<div id="ModuleNicar2019Map-container"></div>

<script type="text/javascript">
var myChart = new ModuleNicar2019Map();

myChart
  .selection('#ModuleNicar2019Map-container')
  .data(data)
  .draw();
</script>
```
##### As a module

To use as a module, simply import the chart object:
```javascript
import ModuleNicar2019Map from 'module-nicar2019-map';
```


```javascript
const myChart = new ModuleNicar2019Map();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  .data([1, 2, 3])
  .props({ stroke: 'orange' })
  .draw();

// You can call any method again to update the chart.
myChart
  .data([3, 4, 5])
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$ModuleNicar2019Map-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$ModuleNicar2019Map-container: '#chart';

@import '~module-nicar2019-map/src/scss/chart';
```


### Developing the chart

Start developing:
```bash
$ yarn start
```

Build for production:
```bash
$ yarn build
```

Read [DEVELOPING](DEVELOPING.md) for more information on using this chart module pattern.
