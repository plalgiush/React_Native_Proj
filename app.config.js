export default () => ({
  expo: {
    name: 'reactNative',
    slug: 'first-project',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.plalgiush.firstproject',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.plalgiush.firstproject',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: '7ed78583-c817-4bf8-bad7-9235f61d31d8',
      },
      API_URL: process.env.API_URL || null,
    },
    owner: 'plalgiush',
    runtimeVersion: {
      policy: 'sdkVersion',
    },
    updates: {
      url: 'https://u.expo.dev/7ed78583-c817-4bf8-bad7-9235f61d31d8',
    },
  },
});
