import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";

import styles from './popularjobs.style';
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useDataFetch from '../../../hooks/useDataFetch';
import { useState } from 'react';

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useDataFetch('search', {
    query: "React developer",
    num_pages: 1
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? <ActivityIndicator size="large" color={COLORS.primary} />
            : error ? (
              <Text>Something went wrong</Text>
            )
              : (
                <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <PopularJobCard
                      item={item}
                      selectedJob={selectedJob}
                      handleCardPress={handleCardPress}
                    />
                  )}
                  keyExtractor={item => item?.job_id}
                  contextContainerStyle={{ columnGap: SIZES.medium }}
                  horizontal
                />
              )
        }
      </View>
    </View>
  )
}

export default Popularjobs