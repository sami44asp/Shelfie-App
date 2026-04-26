import { Client, Account, Avatars, Databases } from "react-native-appwrite";

const client = new Client()
client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1") // ✅ use YOUR region
  .setProject("69e61142001b8faae092");
export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);