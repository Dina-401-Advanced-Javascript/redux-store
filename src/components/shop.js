import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent } from '@material-ui/core';

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
      <Container maxWidth='md'>
        <Grid spacing={5} alignItems="stretch">
          <Grid xs={12}>
            {props.products.map((product, index) => (
              product.category === props.activeCategory.toLowerCase() ?
                <div key={index}>
                  <Card>
                    <CardHeader />
                    <CardContent>
                      {product.name}
                    </CardContent>
                  </Card>
                </div>
                : <div></div>
            ))}
          </Grid>
        </Grid>
      </Container>
      {/* {props.banana.candidates.map((candidate, idx) => (
      <div key={idx}>
        <p>Name: {candidate.name} has {candidate.votes}</p>
        <button onClick={() => voteForCandidate(candidate.name)}>vote for this candidate</button>
      </div>
    ))} 
    <button onClick={reset}>Reset</button>*/}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.shop.products,
  activeCategory: state.shop.activeCategory,
  categories: state.shop.categories
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);