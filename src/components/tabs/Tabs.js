import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesContainer from "../containers/MoviesContainer";
import TvShowsContainer from "../containers/TvShowsContainer";
import SearchContainer from "../containers/SearchContainer";

const TopTabs = createMaterialTopTabNavigator();

const Tabs = () => {
    return(
        <TopTabs.Navigator screenOptions={{
            tabBarActiveTintColor: "rgb(48,62,79)",
            tabBarInactiveTintColor: "rgb(196,196,196)",
            upperCaseLabel: false,
            tabBarIndicatorStyle: {backgroundColor: "rgb(48,62,79)"},
          }}>
            <TopTabs.Screen name="Movies" component={MoviesContainer} />
            <TopTabs.Screen name="Search Results" component={SearchContainer} />
            <TopTabs.Screen name="TV" component={TvShowsContainer} />
        </TopTabs.Navigator>
    )
}

export default Tabs