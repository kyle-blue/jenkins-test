module.exports =  {
    roots: ["<rootDir>/__tests__"],
    transform: {
        '^.+\\.tsx?$': "ts-jest",
    },
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}