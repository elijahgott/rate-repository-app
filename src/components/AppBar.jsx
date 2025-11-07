import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import Text from './Text';

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.primary,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 12,
    marginRight: 12,
  },
  tab: {
    padding: 8,
    borderRadius: 8
  }
});

const tabs = [
  {
    name: 'Repositories',
    to: '/',
    id: 0
  },
  {
    name: 'Sign In',
    to: "/signin",
    id: 1
  },
]

const AppBar = () => {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={tabs}
        // ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <AppBarTab tab={item} />}
        keyExtractor={tab => tab.id}
        contentContainerStyle={styles.list}
      /> */}
      <ScrollView horizontal contentContainerStyle={styles.list}>
        <Link style={styles.tab} to={'/'}>
          <Text color="secondary" fontWeight="bold">Repositories</Text>
        </Link>
        <Link style={styles.tab} to={'/signin'}>
          <Text color="secondary" fontWeight="bold">Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;