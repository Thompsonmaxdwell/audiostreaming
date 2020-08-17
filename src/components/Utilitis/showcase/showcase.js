import React from 'react';
import classes from './showcase.module.scss';
import Aux from '../../../hoc/aux/aux';

const showcase = (props) => (
   <Aux>
       <div className={classes.Showcase}>
          <img  className={classes.Img} src={props.img} alt="" />
       </div>  
   </Aux>
);

export default showcase;
