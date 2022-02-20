import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import {
  getFirestore,
  serverTimestamp,
  collection,
  addDoc,
} from "firebase/firestore";

import { selectUser } from "../user";
import { v4 as uuid } from "uuid";

const db = getFirestore();
const storage = getStorage();

export const postTweetAsync = createAsyncThunk(
  "tweet/post",
  async ({ text, image }, { rejectWithValue, getState }) => {
    const uid = selectUser(getState()).uid;
    try {
      let post = {
        uid: uid,
        postedOn: serverTimestamp(),
      };
      if (text) post = { ...post, text: text };
      if (image) {
        const id = uuid();
        const imagePath = `images/${id}/${image.name}`;
        const imageRef = ref(storage, imagePath);
        await uploadBytes(imageRef, image);
        post = { ...post, image: imagePath };
      }
      await addDoc(collection(db, "posts"), post);
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

const initialState = {
  loading: false,
  postError: null,
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  extraReducers: {
    [postTweetAsync.pending]: (state) => {
      state.loading = true;
      state.postError = null;
    },
    [postTweetAsync.fulfilled]: (state) => {
      state.loading = false;
      state.postError = null;
    },
    [postTweetAsync.rejected]: (state, action) => {
      state.loading = false;
      state.postError = action.payload;
    },
  },
});

export default tweetSlice.reducer;
export const selectLoading = (state) => state.tweet.loading;
export const selectError = (state) => state.tweet.postError;
