import ReactDOM from 'react-dom';
import { ParentSize } from '@vx/responsive';
import { withTooltip, TooltipWithBounds } from '@vx/tooltip';
import { localPoint } from '@vx/event';

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
  { x: 0, y: 2, key: 'WA', name: 'Washington' },
  { x: 0, y: 3, key: 'OR', name: 'Oregon' },
  { x: 0, y: 4, key: 'NV', name: 'Nevada' },
  { x: 0, y: 5, key: 'CA', name: 'California' },
  { x: 0, y: 7, key: 'HI', name: 'Hawaii' },

  { x: 1, y: 2, key: 'MT', name: 'Montana' },
  { x: 1, y: 3, key: 'ID', name: 'Idaho' },
  { x: 1, y: 4, key: 'UT', name: 'Utah' },
  { x: 1, y: 5, key: 'AZ', name: 'Arizona' },

  { x: 2, y: 2, key: 'ND', name: 'North Dakota' },
  { x: 2, y: 3, key: 'WY', name: 'Wyoming' },
  { x: 2, y: 4, key: 'CO', name: 'Colorado' },
  { x: 2, y: 5, key: 'NM', name: 'New Mexico' },

  { x: 3, y: 2, key: 'SD', name: 'South Dakota' },
  { x: 3, y: 3, key: 'NE', name: 'Nebraska' },
  { x: 3, y: 4, key: 'KS', name: 'Kansas' },
  { x: 3, y: 5, key: 'OK', name: 'Oklahoma' },
  { x: 3, y: 6, key: 'TX', name: 'Texas' },

  { x: 4, y: 2, key: 'MN', name: 'Minnesota' },
  { x: 4, y: 3, key: 'IA', name: 'Iowa' },
  { x: 4, y: 4, key: 'MO', name: 'Missouri' },
  { x: 4, y: 5, key: 'AR', name: 'Arkansas' },
  { x: 4, y: 6, key: 'LA', name: 'Louisiana' },

  { x: 5, y: 2, key: 'WI', name: 'Wisconsin' },
  { x: 5, y: 3, key: 'IL', name: 'Illinois' },
  { x: 5, y: 4, key: 'TN', name: 'Tennessee' },
  { x: 5, y: 5, key: 'MS', name: 'Mississippi' },

  { x: 6, y: 2, key: 'MI', name: 'Michigan' },
  { x: 6, y: 3, key: 'IN', name: 'Indiana' },
  { x: 6, y: 4, key: 'KY', name: 'Kentucky' },
  { x: 6, y: 5, key: 'AL', name: 'Alabama' },

  { x: 7, y: 3, key: 'OH', name: 'Ohio' },
  { x: 7, y: 4, key: 'WV', name: 'West Virginia' },
  { x: 7, y: 5, key: 'GA', name: 'Georgia' },

  { x: 8, y: 1, key: 'NY', name: 'New York' },
  { x: 8, y: 2, key: 'PA', name: 'Pennsylvania' },
  { x: 8, y: 3, key: 'VA', name: 'Virginia' },
  { x: 8, y: 4, key: 'NC', name: 'North Carolina' },
  { x: 8, y: 5, key: 'SC', name: 'South Carolina' },
  { x: 8, y: 6, key: 'FL', name: 'Florida' },

  { x: 9, y: 0, key: 'VT', name: 'Vermont' },
  { x: 9, y: 1, key: 'CT', name: 'Connecticut' },
  { x: 9, y: 2, key: 'NJ', name: 'New Jersey' },
  { x: 9, y: 3, key: 'DC', name: 'District of Columbia' },
  { x: 9, y: 4, key: 'MD', name: 'Maryland' },

  { x: 10, y: 0, key: 'NH', name: 'New Hampshire' },
  { x: 10, y: 1, key: 'MA', name: 'Massachusetts' },
  { x: 10, y: 2, key: 'RI', name: 'Rhode Island' },
  { x: 10, y: 3, key: 'DE', name: 'Delaware' },

  { x: 11, y: 0, key: 'ME', name: 'Maine' },
];

class RawChart extends React.Component {
  handleMouseOver = (e, tooltipData) => {
    const coords = localPoint(e.target.ownerSVGElement, e);
    this.props.showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData,
    });
  };

  render() {
    const {
      width,
      height,
      tooltipData,
      tooltipLeft,
      tooltipTop,
      tooltipOpen,
      hideTooltip,
    } = this.props;

    const options = {
      rectWidth: width / 12,
      rectHeight: height / 8,
    };

    return (
      <React.Fragment>
        <svg
          width={width * options.rectWidth}
          height={height * options.rectHeight}
        >
          <Group>
            {gridmapLayoutUsa.map((d, i) => {
              return (
                <Group
                  key={`box-${d.name}`}
                  transform={`translate(${d.x * options.rectWidth},${d.y *
                    options.rectHeight})`}
                >
                  <rect
                    x="0"
                    y="0"
                    fill={color(d.name.length)}
                    opacity={0.5}
                    stroke={color(d.name.length)}
                    width={options.rectWidth}
                    height={options.rectHeight}
                    onMouseOver={e => this.handleMouseOver(e, d)}
                    onMouseOut={hideTooltip}
                  />
                  <text
                    x={options.rectWidth / 2}
                    y={options.rectHeight / 2}
                    font-size="10"
                    fill="white"
                    text-anchor="middle"
                    alignment-baseline="central"
                  >
                    {d.key}
                  </text>
                </Group>
              );
            })}
          </Group>
        </svg>
        {tooltipOpen && (
          <TooltipWithBounds
            // set this to random so it correctly updates with parent bounds
            key={Math.random()}
            top={tooltipTop}
            left={tooltipLeft}
          >
            <p>
              <strong>{tooltipData.name}</strong>
              <br />
              {tooltipData.key}
            </p>
          </TooltipWithBounds>
        )}
      </React.Fragment>
    );
  }
}

const Chart = withTooltip(RawChart);

const App = props => (
  <div style={{ width: 500, height: 300 }}>
    <ParentSize>{parent => <Chart {...parent} />}</ParentSize>
  </div>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
