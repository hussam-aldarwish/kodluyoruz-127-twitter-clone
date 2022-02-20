import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      login: "Login",
      signup: "Signup",
      loading: "Loading...",
      home: "Home",
      search: "Search",
      Profile: "Profile",
      More: "More",
      what: "What's happening?",
      Trends: "Trends for you",
      Who: "Who to follow",
      twitte: "Tweet",
      Theme: "Theme",
      Edit: "Edit Profile",
      Following: "Following",
      Followers: "Followers",
      "Happening now":"Happening now",
      "Join Twitter today.":"Join Twitter today.",
      "Already have an account?": "Already have an account?",
      "Don’t have an account?": "Don’t have an account?",
      "auth/wrong-password": "wrong password!",
      "auth/user-not-found": "user not found",
      "auth/too-many-requests": "too many requests",
      errors: {
        "auth/user-not-found": "user not found",
        "auth/too-many-requests": "too many requests",
        required: "You must fill this field!",
        other: "Error!: {{errorType}}",
      },
      joined: "Joined {{JoinedMonth}} {{JoinedYear}}",
      months: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "June",
        7: "July",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      },
    },
  },
  tr: {
    translation: {
      login: "Giriş yap",
      signup: "Kayıt ol",
      loading: "Yükleniyor...",
      home: "Ana sayfa",
      search: "Ara",
      Profile: "Profil",
      More: "Daha",
      what: "Ne oluyor?",
      Trends: "İlgini çekebilecek gündemler",
      Who: "Kimi takip etmeli",
      twitte: "tweetle",
      Theme: "Teme",
      Edit: "Düzenle",
      Following: "Takipçi",
      Followers: "Takip edilen",
      "Happening now":"Şimdi oluyor",
      "Join Twitter today.":"Bugün Twitter'a katıl.",
      "Sign Up": "Kayıt ol",
      "Already have an account?": "Zaten hesabınız var mı?",
      "Don’t have an account?": "hesabın yok?",
      "auth/wrong-password": "yanlış şifre!",
      errors: {
        "auth/user-not-found": "Kullanıcı bulunamadı",
        "auth/too-many-requests": "çok fazla istek",
        required: "Bu alnı doldurun!",
        other: "Hata!: {{errorType}}",
      },
      joined: "{{JoinedMonth}} {{JoinedYear}} tarihinde katıldı",
      months: {
        1: "Ocak",
        2: "Şubat",
        3: "Mart",
        4: "Nīsan",
        5: "Mayıs",
        6: "Hazīran",
        7: "Temmuz",
        8: "Ağustos",
        9: "Eylül",
        10: "Ekim",
        11: "Kasım",
        12: "Aralık",
      },
    },
  },
};

i18n
.use(I18nextBrowserLanguageDetector)
.use(initReactI18next)
.init({
  resources,
  fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;
  