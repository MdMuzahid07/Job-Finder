import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES, } from "../constants/"
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome
} from "../components"

const Home = () => {
    const router = useRouter();
    const [searchBy, setSearchBy] = useState(" ");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: " "
                }}
            />


            <ScrollView showVerticalScrollIndicator={false}>

                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome
                        searchBy={searchBy}
                        setSearchBy={setSearchBy}
                        handleSearch={() => {
                            if (searchBy) {
                                router.push(`/search/${searchBy}`)
                            }
                        }}
                    />

                    <Popularjobs />

                    <Nearbyjobs />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home;