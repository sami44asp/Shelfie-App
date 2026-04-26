import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedLoader from '../../components/ThemedLoader'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import { Colors } from '../../constants/Colors'
import Link from 'expo-router/link'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'

const Login = () => {
  const [email, setEmail] =   useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { login } = useUser()

  const handleSubmit = async () => {
    setError(null) // Clear previous errors
    try {
      await login(email, password)
      console.log('User logged in successfully')
    } catch (error) {
      setError(error.message) // Set error message to display to the user
    }
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login to your account</ThemedText>
        <Spacer height={20} />
      <ThemedTextInput style={{width:'80%', marginBottom: 20, }} placeholder='Email' keyboardType='email-address' value={email} onChangeText={setEmail} />
      <ThemedTextInput style={{width:'80%', marginBottom: 20,}} placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry />
       <ThemedButton onPress={handleSubmit}>
        <Text style={{color: '#f2f2f2'}}>Login</Text>
       </ThemedButton>
       <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}
      <Spacer height={100} />     
      <Link href="/">
        <ThemedText>Back to Home</ThemedText>
      </Link>
      <Link href="/register">
        <ThemedText>Don't have an account? Register here</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

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
    btn: {
        backgroundColor: Colors.primary,
        padding:15,
        borderRadius: 5
    },
    pressed: {
        opacity:0.8
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