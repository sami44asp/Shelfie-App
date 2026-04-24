import { StyleSheet, Text } from 'react-native'
import Link from 'expo-router/link'
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = ({style}) => (
    <ThemedView style={styles.continer}>
        <ThemedLogo />
        <Spacer height={20} />
        <ThemedText style={styles.title}>The Number 1</ThemedText>
        <Spacer height={10} />
        <ThemedText>Reading List App</ThemedText>
        <Spacer />
        <Link href="/login" style={styles.link}><ThemedText>Login Page</ThemedText></Link>
        <Link href="/register" style={styles.link}><ThemedText>Register Page</ThemedText></Link>
        <Link href="/profile" style={styles.link}><ThemedText>Profile Page</ThemedText></Link>
    </ThemedView>
)

export default Home

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
   
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})