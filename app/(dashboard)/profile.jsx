import { StyleSheet, Text } from 'react-native'

import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/Colors'
import Link from 'expo-router/link'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const Profile = () => {
  const {logout, user} = useUser()
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>{user?.email}</ThemedText>
       <Text style={styles.tagline}>Time to start reading some books...</Text>
      <Spacer />
      <ThemedButton onPress={logout}>
        <Text style={{color: '#f2f2f2'}}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  )
} 

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tagline: {
        fontSize: 14,
        color: '#9591a5',
        marginTop: 10,
        textAlign: 'center'
    }

})
