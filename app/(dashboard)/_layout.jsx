import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import UserOnly from '../../components/auth/UserOnly'

const DashboardLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const insets = useSafeAreaInsets()
  return (
    <UserOnly>
      <Tabs  
      screenOptions={{headerShown: false, 
        tabBarStyle: {
         backgroundColor: theme.navBackground, 
         paddingTop: insets.top,
         paddingBottom: insets.bottom,
         paddingLeft: insets.left,
         paddingRight: insets.right,   
         height: 60 + insets.top + insets.bottom 
        }, tabBarActiveTintColor: theme.iconColorFocused,
           tabBarInactiveTintColor: theme.iconColor    }}>
        <Tabs.Screen name="profile" options={{title: "Profile", tabBarIcon: ({focused}) => <Ionicons name={focused ? 'person' : 'person-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} size={24} />} } />
        <Tabs.Screen name="books" options={{title: "Books", tabBarIcon: ({focused}) => <Ionicons name={focused ? 'book' : 'book-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} size={24} /> }} />
        <Tabs.Screen name="create" options={{title: "Create", tabBarIcon: ({focused}) => <Ionicons name={focused ? 'create' : 'create-outline'} color={focused ? theme.iconColorFocused : theme.iconColor} size={24} /> }} />
   </Tabs>
   </UserOnly>
  ) 
}

export default DashboardLayout
