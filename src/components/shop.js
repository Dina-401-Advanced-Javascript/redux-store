import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia'
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './shop.scss'
import { get, put } from '../store/products';
import Container from '@material-ui/core/Container';

const mapDispatchToProps = { get, put };

function Shop(props) {
  const addToCart = (product) => {
    props.put(product, -1);
  }

  const getProducts = async () => {
    await props.get();
    console.log({ props });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div id="shop">
      <Container maxWidth='xl' className="activeCategory">
        <Typography variant="h2">
          {props.activeCategory.displayName}
        </Typography>
      </Container>
      <Grid container spacing={4} direction="row" id="grid" key="grid">
        {props.products.map((product, index) => (product.category === props.activeCategory.name.toLowerCase() && product.quantity > 0 ?
          <Grid item id={index + 'GridItem'} xs={6} sm={2}>
            <Card id={index + 'Card'} className="root" variant="outlined">
              {product.img ? <img className="images" alt={product.name} src={product.img}></img> : <p></p>}
              <CardContent id={index + 'CardContent'}>
                <Typography variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography className="pos" color="textSecondary">
                  In-stock: {product.quantity}
                </Typography>
                <Typography variant="h6" component="p">
                  <strong>${product.price}</strong>
                </Typography>
              </CardContent>
              <CardActions className="addToCartButton" id={index + 'CardAction'}>
                <Button className="addToCartButton" data-testid={index + 'Button'} id={index + 'Button'} size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
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