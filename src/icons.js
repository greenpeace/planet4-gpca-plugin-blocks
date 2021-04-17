import { Icon } from '@wordpress/components';

const card = (
  <g>
  	<path
      d="M 0 3 C 0 0 0 0 2 0 L 4 0 C 6 0 6 0 6 3 C 6 6 6 6 4 6 L 2 6 C 0 6 0 6 0 3 M 0 3"
      stroke="black"
      fill="white"
      strokeWidth="0.2"
    />
    <path
      d="M 0 3 L 6 3"
      stroke="black"
      strokeWidth="0.2"
    />
    <circle
      cx="4"
      cy="1"
      r="0.5"
      stroke="black"
      strokeWidth="0.15"
      fill="none"
    />
    <path
      d="M 0.3 2.5 Q 1.714 1.5 1.99 1.506 Q 2.275 1.501 3.002 2.009 Q 3.736 2.5 4 2.5 Q 4.24 2.497 4.997 1.983 Q 5.564 1.502 5.7 1.5"
      stroke="black"
      strokeWidth="0.15"
      fill="none"
    />
  </g>
);

const pair = (
  <g>
    {card}
    <g transform="translate(1, 1)">{card}</g>
  </g>
);

export const CardIcon = () => {
  return (
		<Icon icon={
      <svg viewBox="-1 -1 8 8">
				{card}
			</svg>
    } />
	);
};

export const CategoryIcon = () => {
  return (
		<Icon icon={
      <svg viewBox="-1 -1 10 9.5">
        <rect x="-0.5" y="-1" width="8" height="2" stroke="#black" strokeWidth="0.2" fill="#074365" strokeDasharray="0.5" />
        <path
          d="M 2.5 -0.3 L 3.5 0.4 L 4.5 -0.3"
          stroke="white"
          strokeWidth="0.3"
        />
				<g transform="translate(0, 1.5)">
          {pair}
        </g>
			</svg>
		} />
	);
};

export const ListIcon = () => {
  return (
    <Icon icon={
      <svg viewBox="-1 -1 8 12">
        <path d="M -0.5 -0.5 L 7.5 -0.5" stroke="#074365" strokeWidth="2" />
				<g transform="translate(0, 1.5)">
          {pair}
        </g>
        <path d="M -0.5 10.5 L 7.5 10.5" stroke="#074365" strokeWidth="2" />
			</svg>
		} />
	);
};

export default {
  CardIcon,
  CategoryIcon,
  ListIcon
};
