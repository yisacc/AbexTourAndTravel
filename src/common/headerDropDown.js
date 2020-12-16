import react from 'react';
import Grid from '@material-ui/core/Grid';
import { MDBContainer } from 'mdbreact';

const Dropdown = () => {
    return (
        <MDBContainer className="abex-tour-header-dropdown" fluid>
        <MDBContainer className="abex-tour-container" fluid>
     <Grid container>
         
       <Grid item xs={12} sm={2}>
         {''}
       </Grid>
       <Grid item xs={12} sm={2}>
        <h4 className="subtitle-one">Web Dev</h4>
        <ul className="subtitle-two">
          <li>D3 World Map</li>
          <li>Keppler</li>
          <li>P5.js</li>
          <li>Gatsby</li>
       </ul>
      </Grid>
      <Grid item xs={12} sm={2}>
        <h4 className="subtitle-one">Data Science</h4>
        <ul className="subtitle-two">
          <li>Data Mining</li>
          <li>Django web app</li>
          <li>Kaggle</li>
          <li>US Phone Complaints</li>
       </ul>
      </Grid>
      <Grid item xs={12} sm={2}>
        <h4 className="subtitle-one">Design</h4>
        <ul className="subtitle-two">
          <li>Posters</li>
          <li>Sketch</li>
       </ul>
      </Grid>
      <Grid item xs={12} sm={2}>
        <h4 className="subtitle-one">Video</h4>
        <ul className="subtitle-two">
          <li>Youtube Vlog</li>
        </ul>
      </Grid>
      
    </Grid>
    </MDBContainer></MDBContainer>
    );
  };

  export default Dropdown;