import { Pressable, StyleSheet } from 'react-native-web';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingLeft: 12,
    paddingRight: 12
  }
});

const AppBarTab = ({name}) => {
   return(
    <Pressable style={styles.tab} onPress={() => console.log(`Open ${name} tab`)}>
      <Text color="secondary" fontWeight="bold">{name}</Text>
    </Pressable>
   )
}

export default AppBarTab