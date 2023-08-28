import { Client,Account, Databases } from "appwrite";

const client = new Client();

export const PROJECT_ID="64eb11892ff2591d4c1c"
export const DATABASE_ID="64eb12e27458c1d40618"
export const COLLECTION_ID_MESSAGES="64eb12f8a48aa438982f"

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64eb11892ff2591d4c1c");

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
