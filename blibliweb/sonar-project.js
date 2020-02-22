
// eslint-disable-next-line import/no-unresolved
const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.sources': '.',
    'sonar.inclusions': 'src/**',
    // Entry point of your code
  },
}, () => {});
