module.exports = {
    roots: ['<rootDir>/test'],
    testEnvironment: 'node',
    testRegex: '.e2e-spec.ts$',
    verbose: true,
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
};
