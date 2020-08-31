module.exports = {
  preset: '@testing-library/react-native',
  preset: 'react-native',
  //moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!('+
      'react-native'+
      '|react-native-button'+
      '|native-base'+
      '|react-native-responsive-screen'+
      '|react-native-keyboard-aware-scroll-view'+
      '|native-base-shoutem-theme'+
      '|react-native-easy-grid'+
      '|react-native-drawer'+
      '|react-native-vector-icons'+
      '|react-navigation'+
      '|react-native-maps'+
      ')/)',
  ],
};
