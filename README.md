# Hinge Profile Enhancer

A React Native/Expo app that helps users create engaging Hinge dating profiles using AI-powered prompts and suggestions.

## Features

- Modern, Gen Z-friendly UI design
- Step-by-step profile enhancement flow
- AI-powered prompt generation
- Multiple vibe selection
- Custom feedback system
- Cross-platform support (iOS & Android)

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/hinge-profile-enhancer.git
cd hinge-profile-enhancer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npx expo start
```

4. Run on your device:
   - Scan the QR code with your phone's camera (iOS) or Expo Go app (Android)
   - Or press 'i' for iOS simulator or 'a' for Android emulator

## Development

- `src/screens/` - Contains all the screen components
- `src/components/` - Reusable UI components
- `assets/` - Images, fonts, and other static assets

## Sharing the App

### Development Build

1. Install EAS CLI:

```bash
npm install -g eas-cli
```

2. Log in to your Expo account:

```bash
eas login
```

3. Configure the project:

```bash
eas build:configure
```

4. Create a development build:

```bash
eas build --profile development --platform ios
# or
eas build --profile development --platform android
```

### Preview Build

To create a shareable preview:

```bash
eas build --profile preview --platform all
```

This will create a build that can be shared via a link.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern dating apps
- Built with React Native and Expo
- Uses various open-source libraries
