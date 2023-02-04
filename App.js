import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewDetailsScreen from "./src/components/screens/ViewDetailsScreen";
import Tabs from "./src/components/tabs/Tabs";

const StackNavigator = createNativeStackNavigator ()

const App = () => {
  return (
    <NativeBaseProvider>
       <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen
                    name='Movies App'
                    component={Tabs}
                    options={{
                        title: 'Movies App',
                        headerStyle: {
                            backgroundColor: '#2c3e50'
                        },
                        headerTitleStyle: {
                            color: '#fff'
                        }
                        }}
    
                />
                <StackNavigator.Screen
                    name='View Details'
                    component={ViewDetailsScreen}
                    options={({ route }) => ({
                        title: route.params.title
                    })}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
      <StatusBar style="light " />
    </NativeBaseProvider>
  );
}

export default App
