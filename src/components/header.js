import React from 'react';
import './header.scss';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { changeCategory } from '../store/categories';

const mapDispatchToProps = { changeCategory };

function Header(props) {
  const changeCategory = (name) => {
    props.changeCategory(name);
  }

  return (
    <div className="header">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Browse
          </Typography>
          {props.categories.map((category) => {
            return (<Button color="inherit" onClick={() => changeCategory(category.name)}>{category.displayName}</Button>)
          })}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>
        <Typography variant="h1">
          {props.activeCategory}
        </Typography>
        <Typography variant="h5">
          {props.categoryDescription}
        </Typography>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  // products: state.shop.products,
  // activeCategory: state.shop.activeCategory,
  // categories: state.shop.categories
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);