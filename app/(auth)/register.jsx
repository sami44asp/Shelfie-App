import { StyleSheet, Text, Touchable } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/Colors'
import Link from 'expo-router/link'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { useUser } from '../../hooks/useUser'

const Register = () => {
  const [email, setEmail] =   useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  
  const { register } = useUser()

  const handleSubmit = async () => {
    setError(null) // Clear previous errors
    try {
      await register(email, password)
      console.log('User registered successfully')
    } catch (error) {
      setError(error.message) // Set error message to display to the user
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Register for an account</ThemedText>
        <Spacer height={50} />
        {/* Registration form goes here */}
         <ThemedTextInput style={{width:'80%', marginBottom: 20,}} placeholder='Email' keyboardType='email-address' value={email} onChangeText={setEmail} />
        <ThemedTextInput style={{width:'80%', marginBottom: 20,}} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>
        <Spacer />
          {error && <Text style={styles.error}>{error}</Text>}
       <Spacer height={100} />
        <Link href="/login">
          <ThemedText>Already have an account? Login here</ThemedText>
        </Link>
      </ThemedView>
      </TouchableWithoutFeedback> 
    )
  }

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
        },
        error: {
            color: Colors.warning,
            padding: 10,
            backgroundColor: '#f5c1c8',
            borderColor: Colors.warning,
            borderWidth: 1,
            borderRadius: 6,
            marginTop: 10,  
            marginLeft: 20,
            marginRight: 20,
        }
})