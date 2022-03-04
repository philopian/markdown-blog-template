module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  roots: ['<rootDir>/components', '<rootDir>/hooks', '<rootDir>/utils', '<rootDir>/pages'],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/(components?|hooks?|utils?|pages?)/.*.(test|spec)).(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/{components,hooks,utils}/**/*.{ts,tsx}',
    '!<rootDir>/utils/mdx.ts',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$', '(.*).d.ts$'],
  moduleNameMapper: {
    '@/components/(.*)$': '<rootDir>/components/$1',
    '@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '@/utils/(.*)$': '<rootDir>/utils/$1',
    '@/pages/(.*)$': '<rootDir>/pages/$1',
    '@/utils/(.*)$': '<rootDir>/utils/$1',
    '@/types/(.*)$': '<rootDir>/types/$1',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
}
