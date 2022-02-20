import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  serverTimestamp,
  collection,
} from "firebase/firestore";
const auth = getAuth();
const db = getFirestore();

export const signupAsync = createAsyncThunk(
  "user/signup",
  async (payload, { rejectWithValue, dispatch }) => {
    const displayName = payload.displayName;
    const username = payload.username.startsWith("@")
      ? payload.username.toLowerCase()
      : `@${payload.username.toLowerCase()}`;
    const email = payload.email;
    const password = payload.password;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const { uid } = user;
      const { creationTime } = user.metadata;
      const userRef = doc(db, "users", uid);
      await setDoc(
        userRef,
        {
          displayName: displayName,
          username: username,
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );
      dispatch(loadUsersToFollow({ uid: uid, n: 3 }));
      return { uid, username, email, displayName, creationTime };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "user/login",
  async (payload, { rejectWithValue, dispatch }) => {
    const email = payload.email;
    const password = payload.password;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const { uid } = user;
      const { creationTime } = user.metadata;
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      const { username, displayName } = userSnap.data();
      dispatch(loadUsersToFollow({ uid: uid, n: 3 }));
      return { uid, username, email, displayName, creationTime };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const loadUsersToFollow = createAsyncThunk(
  "user/loadUsersToFollow",
  async ({ uid, n }) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let users = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      if (uid !== id) {
        const data = doc.data();
        users.push({
          uid: id,
          displayName: data.displayName,
          username: data.username,
        });
      }
    });
    return users.sort(() => Math.random() - Math.random()).slice(0, n);
  }
);

const initialState = {
  loading: false,
  user: null,
  loginError: null,
  signupError: null,
  usersToFollow: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      signOut(auth);
      state.loading = false;
      state.user = null;
      state.loginError = null;
      state.signupError = null;
      state.usersToFollow = [];
    },
  },
  extraReducers: {
    [signupAsync.pending]: (state) => {
      state.loading = true;
      state.loginError = null;
      state.signupError = null;
      state.usersToFollow = [];
    },
    [signupAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loginError = null;
      state.signupError = null;
    },
    [signupAsync.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.signupError = action.payload;
    },
    [loginAsync.pending]: (state) => {
      state.loading = true;
      state.loginError = null;
      state.signupError = null;
      state.usersToFollow = [];
    },
    [loginAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loginError = null;
      state.signupError = null;
    },
    [loginAsync.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.loginError = action.payload;
    },
    [loadUsersToFollow.fulfilled]: (state, action) => {
      state.usersToFollow = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;
export const selectLoading = (state) => state.user.loading;
export const selectUser = (state) => state.user.user;
export const selectSignupError = (state) => state.user.signupError;
export const selectLoginError = (state) => state.user.loginError;
export const selectUsersToFollow = (state) => state.user.usersToFollow;
export default userSlice.reducer;
