import React from 'react'
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
    id: '',
    cover: {
      url: selfCareCheckIn
    },
    bookNow: 'Book now',
    readMore: 'Read more',
    title: 'Self-Care Check-in',
    description: 'A monthly sisterhood circle for decompression and support.',
    breakdown:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    onClick: () => alert('Ayo, feel me there?')
  }
  return (
    <ContentContainer>
      {/* <TagLine
        tagLineInfo={{
          title:
            'Come, let us sit, hold the space in compassion, and acceptance. Put our problems on pause, and focus on showing our bodies kindness. Together. '
        }}
      /> */}
      <PageContentContainer heading="Self Care Check In">
        <Card {...cardInfo} />
      </PageContentContainer>
    </ContentContainer>
  )
}

export default SelfCareCheckIn
