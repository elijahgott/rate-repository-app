import { View, FlatList, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 12,
    paddingBottom: 12,
    backgroundColor: theme.colors.primary,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

const tabs = [
  {
    name: 'Repositories',
    id: 0
  },
  {
    name: 'Profile',
    id: 1
  },
]

const AppBar = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        // ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <AppBarTab name={item.name} />}
        keyExtractor={tab => tab.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default AppBar;