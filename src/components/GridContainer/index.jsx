import React from 'react';
import { GridContainer } from './styles.js'; // Importing the styled component

// This component now accepts children and possibly other props
const MyGridComponent = ({ children, ...props }) => {
  return (
    <GridContainer {...props}>
      {children}
    </GridContainer>
  );
};

export default MyGridComponent;