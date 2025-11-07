import { View, StyleSheet, Image } from "react-native-web"
import Text from './Text'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: theme.colors.secondary,
  },
  topContainer: {
    flexDirection: 'row'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  nameContainer: {
    width: 'fit-content',
    flexWrap: 'wrap',
    marginLeft: 8,
    marginRight: 12,
  },
  descriptionContainer: {
    width: '100%',
    border: '2px solid transparent' // text doesnt wrap without this. idk man
  },
  description: {
    flexWrap: 'wrap',
    flexShrink: 1
  },
  language: {
    padding: 4,
    marginTop: 4,
    backgroundColor: theme.colors.primary,
    width: 'fit-content',
    borderRadius: 4
  },
  dataContainer: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  data: {
    alignItems: 'center'
  }
});

const RepositoryItem = ({repo}) => {
  return(
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
        </View>
        <View style={styles.nameContainer}>
          <Text color="textPrimary" fontWeight="bold" fontSize="subheading">{repo.fullName}</Text>
          <View style={styles.descriptionContainer}>
            <Text color="textSecondary" style={styles.description}>{repo.description}</Text>
          </View>
          <Text color="white" fontWeight="bold" fontSize="small" style={styles.language}>{repo.language}</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.data}>
          <Text fontWeight="bold">{repo.stargazersCount > 1000 ? `${Math.round((repo.stargazersCount / 1000) * 10) / 10}k` : repo.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.data}>
          <Text fontWeight="bold">{repo.forksCount > 1000 ? `${Math.round((repo.forksCount / 1000) * 10) / 10}k` : repo.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.data}>
          <Text fontWeight="bold">{repo.reviewCount > 1000 ? `${Math.round((repo.reviewCount / 1000) * 10) / 10}k` : repo.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.data}>
          <Text fontWeight="bold">{repo.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
}

export default RepositoryItem