import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './shop.scss'
import { addToCart } from '../store/products';
import Container from '@material-ui/core/Container';

const mapDispatchToProps = { addToCart };

function Shop(props) {
  const addToCart = (product) => {
    props.addToCart(product);
  }

  return (
    <div id="shop">
      <Container maxWidth='xl' className="activeCategory">
        <Typography variant="h2">
          {props.activeCategory.displayName}
        </Typography>
      </Container>
      <Grid container spacing={4} direction="row" id="grid" key="grid">
        {props.products.map((product, index) => (product.category === props.activeCategory.name.toLowerCase() && product.inStock > 0 ?
          <Grid item id={index + 'GridItem'} xs={4}>
            <Card id={index + 'Card'} className="root" variant="outlined">
              <CardContent id={index + 'CardContent'}>
                <Typography className="title" color="textSecondary" gutterBottom>
                  {product.category}
                </Typography>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography className="pos" color="textSecondary">
                  In-stock: {product.inStock}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>${product.price}</strong>
                </Typography>
              </CardContent>
              <CardActions id={index + 'CardAction'}>
                <Button data-testid={index + 'Button'} id={index + 'Button'} size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
          : <div></div>
        ))}
      </Grid>
      {!props.activeCategory.name ?
        <Grid id="noCategorySelected" item xs={12}>
          <br /><br /><br />
          Choose a category from the menu above to see the available products.
        </Grid>
        :
        <p></p>}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products.products,
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);