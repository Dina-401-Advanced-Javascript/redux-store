import React from 'react';
import './header.scss';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { changeCategory } from '../store/categories';

import { NavLink } from 'react-router-dom';

const mapDispatchToProps = { changeCategory };

function Header(props) {

  return (
    <div className="header">
      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <NavLink to="/" className="homeLink" >Dee's Fine Art</NavLink>
          </Typography>
          <span className="linkDiv">
            {props.categories.map((category, index) => {
              return (<NavLink to="/products" data-testid={category.name} key={index + 'CategoryLink'} className="menuLink" onClick={() => props.changeCategory(category)}>{category.displayName}</NavLink>)
            })}
          </span>
          <span className="cartDiv">
            <NavLink to="/cart" className="menuLink" data-testid="cartLink">Cart ({props.products.reduce((acc, curr) => {
              return acc += curr.inCart
            }, 0)})</NavLink>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories,
  products: state.products.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);