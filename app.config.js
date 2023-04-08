import "dotenv/config"

export default{
  "expo": {
    "name": "SkillMate",
    "slug": "SkillMate",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash.jpg",
      "resizeMode": "cover"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/icon.png",
        "backgroundColor": "#000000"
      },
      "package": "com.bra.SkillMate"
    },
    "extra": {
      "eas": {
        "projectId": "05cdf067-760b-4309-8f19-5b2a539a9162"
      },
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectID : process.env.PROJECT_ID,
      storageBucket : process.env.STORAGE_BUCKET,
      messagingSenderID : process.env.MESSAGING_SENDER_ID,
      appID : process.env.APP_ID

    },
    "scheme": "skillmate"
  }
}
