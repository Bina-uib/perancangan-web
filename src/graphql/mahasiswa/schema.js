const typeDefs = `#graphql
    type mahasiswa {
        id_mahasiswa: ID!
        kode: String!
        nama: String!
        create_at: String
        update_at: String
        delete_at: String
    }
        input MahasiswaInput {
        kode: String!
        nama: String!
    }

    extend type Query {
        mahasiswa: [mahasiswa]
        mahasiswaById(id: ID!): [mahasiswa]
        cariMahasiswa(keyword: String!): [mahasiswa]
    }
        extend type Mutation {
        tambahMahasiswa(input: MahasiswaInput!): mahasiswa
        updateMahasiswa(
            id: ID!
            input: MahasiswaInput!
        ): mahasiswa
        deleteMahasiswa(id: ID!): mahasiswa
        restoreMahasiswa(id: ID!): mahasiswa
    }
`;

module.exports = typeDefs;
