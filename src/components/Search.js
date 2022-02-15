import React, { useState } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Container as="section" fluid className=" pkm-searchbox">
      <Row>
        <div className="col-md-6 offset-md-3">
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className=" pkm-searchbox-content">
              <Form.Control
                type="text"
                name="q"
                placeholder="Search pokemon"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button type="submit">Search</Button>
            </Form.Group>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default Search;
