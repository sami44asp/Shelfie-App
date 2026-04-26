import { StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import Link from 'expo-router/link'
import { useBooks } from '../../hooks/useBooks'
import { useRouter } from 'expo-router'
import { useState } from 'react'

const Create = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const { createBook } = useBooks()
  const router = useRouter()

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim())
      return
    setLoading(true)
    await createBook({ title, author, description })
    setLoading(false)
    router.replace('/books')
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
        <ThemedText title={true} style={styles.heading}>Add a New Book</ThemedText>
        <Spacer />
        <ThemedTextInput style={styles.input} placeholder="Book Title" value={title} onChangeText={setTitle}></ThemedTextInput>
        <Spacer />
        <ThemedTextInput style={styles.input} placeholder="Book Author" value={author} onChangeText={setAuthor}></ThemedTextInput>
        <Spacer />
        <ThemedTextInput style={styles.multiline} placeholder="Book Description" value={description} onChangeText={setDescription} multiline={true}></ThemedTextInput>
        <Spacer />
        <ThemedButton onPress={handleSubmit} disabled={loading} style={{ backgroundColor: loading ? '#888' : '#007bff' }}
        >
          <ThemedText style={{ color: '#f2f2f2' }}>{loading ? 'Saving...' : 'Create Book'}</ThemedText>
        </ThemedButton>
        <Spacer />
        <Link href="/(dashboard)">
          <ThemedText>Back to Dashboard</ThemedText>
        </Link>
    </ThemedView>

    </TouchableWithoutFeedback>
  )
}

export default Create

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
  input: {
    padding: 20,
    alignSelf: 'stretch',
    borderRadius: 6,
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40
  }
})