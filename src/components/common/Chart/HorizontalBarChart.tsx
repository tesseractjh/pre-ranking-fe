import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import useResize from '@hooks/useResize';
import theme from '@styles/theme';
import debounce from '@utils/debounce';

interface Props {
  data: ChartData[];
  barHeight?: number;
  gap?: number;
}

const Container = styled.svg`
  width: 100%;
`;

function HorizontalBarChart({ data, barHeight = 40, gap = 20 }: Props) {
  const [width, setWidth] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  const onResize = () => {
    const width = document
      .querySelector('.chart')
      ?.getBoundingClientRect()?.width;

    if (width) {
      setWidth(width);
    }
  };

  useResize(debounce(onResize, 200));

  useEffect(() => {
    onResize();
  }, []);

  useEffect(() => {
    const valueSum = d3.sum(data.map(({ value }) => value));

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', (barHeight + gap) * data.length - gap)
      .attr('font-family', 'SUIT Variable');

    const xScale = d3.scaleLinear().domain([0, valueSum]).range([0, width]);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', (data, index) => (barHeight + gap) * index)
      .attr('width', 0)
      .attr('height', barHeight)
      .attr('fill', ({ color }) => theme.color[color]);

    svg
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(
        ({ value, label }) =>
          `${label} (${value}명, ${((value * 100) / valueSum).toFixed(1)}%)`
      )
      .attr('x', 10)
      .attr('y', (data, index) => 26 + (barHeight + gap) * index)
      .attr('font-size', 16)
      .attr('font-weight', 900)
      .attr('fill', 'black');

    svg
      .selectAll('rect')
      .data(data)
      .transition()
      .delay((_, index) => index * 200)
      .duration(800)
      .attr('width', ({ value }) => xScale(value));
  }, [data, width]);

  return <Container ref={svgRef} className="chart" />;
}

export default HorizontalBarChart;
