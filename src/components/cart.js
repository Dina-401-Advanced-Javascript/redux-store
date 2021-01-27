import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './shop.scss'
import { removeFromCart, addToCart } from '../store/products';
// import Container from '@material-ui/core/Container';
// import cart from '../store/cart';

const mapDispatchToProps = { removeFromCart, addToCart };

function Cart(props) {

  return (
    <div>
      <Grid container spacing={4} direction="row" id="grid">
        {props.products.map((product, index) => product.inCart > 0 ?
          (
            <Grid item id={index + 'GridItem'} xs={12}>
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
                <Button disabled={product.inCart < 2} onClick={() => props.removeFromCart(product)}>-</Button>
                {product.inCart}
                <Button disabled={product.inStock < 1} onClick={() => props.addToCart(product)}>+</Button>
                <CardActions id={index + 'CardAction'}>
                  <Button id={index + 'Button'} size="small" onClick={() => props.removeFromCart(product)}>Remove from Cart</Button>
                </CardActions>
              </Card>



            </Grid>
          ) : <div></div>)}
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);;