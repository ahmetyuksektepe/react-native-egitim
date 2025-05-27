import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DenemeScreen from "../screens/DenemeScreen";
import ApiTestScreen from "../screens/ApiTestScreen";
import CameraScreen from "../screens/CameraScreen";
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: 'white',
            },
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/>
                ),
            headerShown: false
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Deneme" component={DenemeScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
             <Tab.Screen name="ApiTest" component={ApiTestScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Camera" component={CameraScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="camera" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                ),
                headerShown: false
            }} />
           
        </Tab.Navigator>
    )
}

