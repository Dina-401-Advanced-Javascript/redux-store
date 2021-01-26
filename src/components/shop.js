import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import { increment } from '../store/shop';
import './shop.scss'

// const mapDispatchToProps = { increment, reset };
const mapDispatchToProps = {};

function Shop(props) {
  console.log({ props });
  // const voteForCandidate = (name) => {
  // console.log('vote for Candidate', name);
  // props.increment(name);
  // }

  return (
    <div id="shop">
      <Grid container spacing={4} direction="row">
        {props.products.map((product, index) => (
          product.category === props.activeCategory.toLowerCase() ?
            <Grid item xs={3}>
              <div key={index}>
                <Card className="root" variant="outlined">
                  <CardContent>
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
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card>
              </div> </Grid>
            : <div></div>
        ))}
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.shop.products,
  activeCategory: state.shop.activeCategory,
  categories: state.shop.categories
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);