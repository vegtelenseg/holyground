import React from 'react';
import { PageContentContainer } from '../../components/PageContentContainer/PageContentContainer';
import { TagLine } from '../../components/TagLine/TagLine';
import { ContentContainer } from '../../components/ContentContainer/ContentContainer';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Slider, { Settings as ReactSlickSettings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles(theme => ({
  caption: {},
  about: {
    textAlign: 'center' as 'center',
    // lineHeight: 1.5,
    [theme.breakpoints.down('md')]: {
      lineHeight: 1
    },
    [theme.breakpoints.up('sm')]: {
      lineHeight: 1.5
    }
    , [theme.breakpoints.up('lg')]: {
      lineHeight: 2.5
    }
  },
  sliderContainer: {
    '& .slick-slider': {
      height: '100%'
    }
  }
}));

const slideImages = [{
  src: require('../../assets/images/meditation-1.jpeg'),
}, {
  src: require('../../assets/images/meditation-2.jpeg'),
},
{
  src: require('../../assets/images/meditation-1.jpeg'),
}, {
  src: require('../../assets/images/meditation-2.jpeg'),
}, {
  src: require('../../assets/images/meditation-5.jpeg'),
}]
export const About = () => {
  const classes = useStyles();
  const settings: ReactSlickSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000


  };
  return (
    <ContentContainer>
      <TagLine tagLineInfo={{
        title: 'You are holy ground',
        subTitle: 'The self care journey'
      }} />
      <PageContentContainer heading="About">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary" className={classes.caption}>
              letting go is the lesson, letting go is always the lesson
            </Typography>
            <Typography color="primary" className={classes.about}>
              Our feelings are vibrational messages, they indicate whether or not we are in vibrational alignment with our true selves. It is the frequency of these vibrations, that attracts like vibrations, and in that way, we create our own reality. This self-care journey is about learning how to transmute from states of anxiety and restlessness to states of trusting our bodies and rising in love with our selves. In order for us to do that, we need to let go of thoughts and feelings that create resistance. Resistance, even to something unpleasant, breeds suffering. Our work is to show you all the tools that already exist in your body to bring you to a state of peace, and unconditional acceptance. The alchemist is you, it has always been you.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className={classes.sliderContainer}>
            <Slider {...settings}>
              {slideImages.map(slide => <img key={slide.src} src={slide.src} alt="slide" />)}
            </Slider>
          </Grid>
        </Grid>
      </PageContentContainer>
    </ContentContainer>
  )
}

export default About