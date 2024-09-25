import React from 'react';
interface Props {
    className?: string;

}
const HamburguerMenuIcon = ({className} : Props) => (
  <svg className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
   stroke='#FFFFFF' 
   fill='#FFFFFF'
   strokeWidth={1} >
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default HamburguerMenuIcon;