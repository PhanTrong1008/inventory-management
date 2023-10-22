import { createSlice } from "@reduxjs/toolkit";

type Language = {
  currentLang: {
    value: string;
    label: string;
    locale: string;
  };
};

const initialState: Language = {
  currentLang: {
    value: "en-US",
    label: "English (UK)",
    locale: "en"
  }
};

export const translate = createSlice({
  name: "translate",
  initialState,
  reducers: {
    handleChangeLang: (
      state: Language,
      lang: {
        value: string;
        label: string;
        locale: string;
      }
    ) => {
      state.currentLang = {
        value: "vi-VN",
        label: "Tiếng Việt",
        locale: "vi"
      };
    }
  }
});

export const { handleChangeLang } = translate.actions;
export default translate.reducer;
