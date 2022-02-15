import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { removeFromFavorite } from './../actions/favoriteActions';

import { Container, Navbar, Button, Alert } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BtnFavorite from './BtnFavorite';

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { favoriteItems } = useSelector((state) => state.favorite);

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                alt="Pokémon"
                height="45"
              />
            </Navbar.Brand>
          </LinkContainer>
          <BtnFavorite
            lg
            isFavorite={favoriteItems.length > 0}
            qty={favoriteItems.length}
            onClick={handleShow}
          />
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favorite Pokemons</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pkm-favorite-sidebar-content">
          {favoriteItems.length ? (
            favoriteItems.map((el) => (
              <div className="pkm-favorite-sidebar-item">
                <div className="pkm-favorite-sidebar-item-img">
                  <img className="img-fluid" src={el.image} alt={el.name} />
                </div>
                <div className="pkm-favorite-sidebar-item-content">
                  {el.name}
                </div>
                <div className="pkm-favorite-sidebar-item-btn">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => dispatch(removeFromFavorite(el.id))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <Alert variant="warning">Choose as favorites some pokemons!</Alert>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
