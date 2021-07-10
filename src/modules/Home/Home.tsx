import React from 'react'
import { Card } from '../../components/Card/Card'
import { PageContentContainer } from '../../components/PageContentContainer/PageContentContainer'
import { TagLine } from '../../components/TagLine/TagLine'
import { ContentContainer } from '../../components/ContentContainer/ContentContainer'
import { useGetServicesQuery } from '../../generated/graphql'

// const cards: CardInfo[] = [
//   {
//     pictureUrl: require('../../assets/images/self-love-yoga.png'),
//     title: 'Restorative Yoga For Self-love',
//     subTitle: 'Gentle stretches to align and calm the mind body and spirit.',
//     onClick: () => alert('Book Self Love Yoga')
//   },
//   {
//     pictureUrl: require('../../assets/images/self-care-retreat.png'),
//     title: 'Self Care Retreat',
//     subTitle: 'Setting you on a path to feeling whole and wholesome, every day.',
//     onClick: () => alert('Book Self Care Retreat')
//   },
//   {
//     pictureUrl: require('../../assets/images/elixir.png'),
//     title: 'Dance is the Elixir',
//     subTitle: 'A movement meditation, to align and balance.',
//     onClick: () => alert('Book Self Dance is the Elixir')
//   },
//   {
//     pictureUrl: require('../../assets/images/chakra.png'),
//     title: 'Chakra Medicine',
//     subTitle: "A gentle introduction to your body's energy centres.",
//     onClick: () => alert('Book Chakra Medicine')
//   },
//   {
//     pictureUrl: require('../../assets/images/meditation.png'),
//     title: 'Guided Meditation',
//     subTitle: 'Feel the healing power of silence',
//     onClick: () => alert('Book Guided Meditation')
//   }
// ]

export const Home = () => {
  const { data } = useGetServicesQuery()

  if (data && data.services && data.services.length) {
    return (
      <ContentContainer>
        <TagLine
          tagLineInfo={{
            title: '"These mountains you are carrying, you were only supposed to climb"',
            subTitle: 'Najwa Zebian'
          }}
        />
        {data.services && (
          <PageContentContainer heading="Home">
            {data.services.map((card: any) => (
              <Card {...card} />
            ))}
          </PageContentContainer>
        )}
      </ContentContainer>
    )
  }
  return null
}

export default Home
