import { Pressable, StyleSheet } from 'react-native-web';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingLeft: 12,
    paddingRight: 12
  }
});

const AppBarTab = ({tab}) => {
   return(
    <Link style={styles.tab} to={tab.to}>
      <Text color="secondary" fontWeight="bold">{tab.name}</Text>
    </Link>
   )
}

export default AppBarTab