import { createContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = "69edfc30000addbb6cea"; // Replace with your actual database ID
const TABLE_ID = "books"; // Replace with your actual Table ID
export const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState([])
    const {user} = useUser()
    
    async function fetchBooks() {
        // Fetch books from your database and update the state
        // Example:
        // const response = await database.listDocuments('books');
        // setBooks(response.documents);

        try {
            

        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchBookById(id) {
        // Fetch a single book by its ID from your database
        // Example:
        // const response = await database.getDocument('books', id);
        // return response.document;
     try {
        
     } catch (error) {
        console.error(error.message);
     }
    }

    async function createBook(data) {
        // Create a new book in your database
        // Example:
        // const response = await database.createDocument('books', book);
        // return response.document;
    try {
        const newbook =  await databases.createDocument(DATABASE_ID, TABLE_ID, ID.unique(),{...data, userId: user.$id},
        [Permission.read(Role.user(user.$id)), 
            Permission.update(Role.user(user.$id)),
             Permission.delete(Role.user(user.$id))])
        }   
    catch (error) {
        console.error(error.message);
    }
    }
   async function updateBook(id, updatedBook) {
        // Update an existing book in your database
        // Example:
        // const response = await database.updateDocument('books', id, updatedBook);
        // return response.document;
    try {
    } catch (error) {
        console.error(error.message);
    }
}
    async function deleteBook(id) {
        // Delete a book from your database
        // Example:
        // await database.deleteDocument('books', id);
    try {   
    } catch (error) {
        console.error(error.message);
    }
    }
    return (
        <BooksContext.Provider value={{ books, fetchBooks, fetchBookById, createBook, updateBook, deleteBook }}>
            {children}
        </BooksContext.Provider>
    )
}