import React from 'react';
import { Container } from 'react-bootstrap';

import Pagination from './Pagination';

const Filters = () => {
  return (
    <Container as="section">
      <div className="pkm-filters">
        <Pagination />
      </div>
    </Container>
  );
};

export default Filters;
