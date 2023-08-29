import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from "expo-router";
import { icons, SIZES } from '../../../constants';

import styles from './welcome.style';

const jobTypes = ["Full-time", "Part-time", "Contract"];

const Welcome = ({ searchBy, setSearchBy, handleSearch }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('full-time');

  return (
    <View>

      <View style={styles.container}>
        <Text style={styles.userName}>Hello Muzahid</Text>
        <Text style={styles.welcomeMessage}>Find your Developer job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchBy}
            onChangeText={(text) => setSearchBy(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome