import React from 'react'
import { TagLine } from '../../components/TagLine/TagLine'
import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { Card, CardInfo } from '../../components/Card/Card'
import selfCareCheckIn from '../../assets/images/self-care-check-in.png'
import { PageContentContainer } from '../../components/PageContentContainer/PageContentContainer'

// const useStyles = makeStyles(theme => ({
//   selfCareCheckIn: {
//     position: 'relative' as 'relative'
//   }
// }));

export const SelfCareCheckIn = () => {
  // const classes = useStyles();
  const cardInfo: CardInfo = {
    cover: {
      url: selfCareCheckIn
    },
    buttonText: 'Book Now',
    title: 'Self-Care Check-in',
    description: 'A monthly sisterhood circle for decompression and support.',
    onClick: () => alert('Ayo, feel me there?')
  }
  return (
    <ContentContainer>
      <TagLine
        tagLineInfo={{
          title:
            'Come, let us sit, hold the space in compassion, and acceptance. Put our problems on pause, and focus on showing our bodies kindness. Together. '
        }}
      />
      <PageContentContainer heading="Self Care Check In">
        <Card {...cardInfo} />
      </PageContentContainer>
    </ContentContainer>
  )
}

export default SelfCareCheckIn
