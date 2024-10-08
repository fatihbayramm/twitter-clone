import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "fatihbayramybs",
    fullName: "Fatih Bayram",
    avatar:
      "https://pbs.twimg.com/profile_images/1828162962600742912/KMpZAuBb_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "fatihbayramybs",
      fullName: "Fatih Bayram",
      avatar:
        "https://pbs.twimg.com/profile_images/1828162962600742912/KMpZAuBb_400x400.jpg",
    },
    {
      id: 2,
      username: "fatihb",
      fullName: "Fatih Bayram",
      avatar:
        "https://pbs.twimg.com/profile_images/1828162962600742912/KMpZAuBb_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },

    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );

      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },

    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;

export default auth.reducer;
