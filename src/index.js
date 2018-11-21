import ReactDOM from 'react-dom';

import React from 'react';
import { Group } from '@vx/group';
import * as d3 from 'd3';

var color = d3
  .scaleQuantize()
  .domain([1, 20])
  .range([
    '#b2ddf0',
    '#92bcd8',
    '#769cbf',
    '#5d7da7',
    '#46608f',
    '#334577',
    '#232d5f',
  ]);

const gridmapLayoutUsa = [
  { x: 0, y: 0, key: 'AK', name: 'Alaska' },
  { x: 11, y: 0, key: 'ME', name: 'Maine' },
  { x: 9, y: 1, key: 'VT', name: 'Vermont' },
  { x: 10, y: 1, key: 'NH', name: 'New Hampshire' },
  { x: 11, y: 1, key: 'MA', name: 'Massachusetts' },
  { x: 1, y: 2, key: 'WA', name: 'Washington' },
  { x: 2, y: 2, key: 'MT', name: 'Montana' },
  { x: 3, y: 2, key: 'ND', name: 'North Dakota' },
  { x: 4, y: 2, key: 'SD', name: 'South Dakota' },
  { x: 5, y: 2, key: 'MN', name: 'Minnesota' },
  { x: 6, y: 2, key: 'WI', name: 'Wisconsin' },
  { x: 7, y: 2, key: 'MI', name: 'Michigan' },
  { x: 9, y: 2, key: 'NY', name: 'New York' },
  { x: 10, y: 2, key: 'CT', name: 'Connecticut' },
  { x: 11, y: 2, key: 'RI', name: 'Rhode Island' },
  { x: 1, y: 3, key: 'OR', name: 'Oregon' },
  { x: 2, y: 3, key: 'ID', name: 'Idaho' },
  { x: 3, y: 3, key: 'WY', name: 'Wyoming' },
  { x: 4, y: 3, key: 'NE', name: 'Nebraska' },
  { x: 5, y: 3, key: 'IA', name: 'Iowa' },
  { x: 6, y: 3, key: 'IL', name: 'Illinois' },
  { x: 7, y: 3, key: 'IN', name: 'Indiana' },
  { x: 8, y: 3, key: 'OH', name: 'Ohio' },
  { x: 9, y: 3, key: 'PA', name: 'Pennsylvania' },
  { x: 10, y: 3, key: 'NJ', name: 'New Jersey' },
  { x: 0, y: 4, key: 'CA', name: 'California' },
  { x: 1, y: 4, key: 'NV', name: 'Nevada' },
  { x: 2, y: 4, key: 'UT', name: 'Utah' },
  { x: 3, y: 4, key: 'CO', name: 'Colorado' },
  { x: 4, y: 4, key: 'KS', name: 'Kansas' },
  { x: 5, y: 4, key: 'MO', name: 'Missouri' },
  { x: 6, y: 4, key: 'KY', name: 'Kentucky' },
  { x: 7, y: 4, key: 'WV', name: 'West Virginia' },
  { x: 8, y: 4, key: 'DC', name: 'District of Columbia' },
  { x: 9, y: 4, key: 'MD', name: 'Maryland' },
  { x: 10, y: 4, key: 'DE', name: 'Delaware' },
  { x: 2, y: 5, key: 'AZ', name: 'Arizona' },
  { x: 3, y: 5, key: 'NM', name: 'New Mexico' },
  { x: 4, y: 5, key: 'OK', name: 'Oklahoma' },
  { x: 5, y: 5, key: 'AR', name: 'Arkansas' },
  { x: 6, y: 5, key: 'TN', name: 'Tennessee' },
  { x: 7, y: 5, key: 'VA', name: 'Virginia' },
  { x: 8, y: 5, key: 'NC', name: 'North Carolina' },
  { x: 3, y: 6, key: 'TX', name: 'Texas' },
  { x: 4, y: 6, key: 'LA', name: 'Louisiana' },
  { x: 5, y: 6, key: 'MS', name: 'Mississippi' },
  { x: 6, y: 6, key: 'AL', name: 'Alabama' },
  { x: 7, y: 6, key: 'GA', name: 'Georgia' },
  { x: 8, y: 6, key: 'SC', name: 'South Carolina' },
  { x: 0, y: 7, key: 'HI', name: 'Hawaii' },
  { x: 7, y: 7, key: 'FL', name: 'Florida' },
];

var options = {
  rectWidth: 45,
  rectHeight: 45,
};

const App = ({ width, height }) => {
  return (
    <svg width={width * options.rectWidth} height={height * options.rectHeight}>
      <Group>
        {gridmapLayoutUsa.map((d, i) => {
          return (
            <Group
              key={`box-${d.name}`}
              transform={`translate(${d.x * options.rectWidth},${d.y *
                options.rectHeight})`}>
              <rect
                x="0"
                y="0"
                fill={color(d.name.length)}
                opacity={0.5}
                stroke={color(d.name.length)}
                width={options.rectWidth}
                height={options.rectHeight}
              />
            </Group>
          );
        })}
      </Group>
    </svg>
  );
};

App.defaultProps = {
  width: 12,
  height: 8,
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);