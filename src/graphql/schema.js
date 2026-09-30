const jenisKelaminSchema = require("./jenis_kelamin/schema");
const angkatanSchema = require("./angkatan/schema");
const mahasiswaSchema = require("./mahasiswa/schema");
const programStudiSchema = require("./program_studi/schema");

const baseSchema = `#graphql
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

const typeDefs = [
    baseSchema,
    jenisKelaminSchema,
    angkatanSchema,
    mahasiswaSchema,
    programStudiSchema
];

module.exports = typeDefs;