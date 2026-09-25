const typeDefs = `#graphql
    type Angkatan {
        id_angkatan: ID!
        kode: String!
        nama: String!
        create_at: String
        update_at: String
        delete_at: String
    }
        input AngkatanInput {
        kode: String!
        nama: String!
    }

    extend type Query {
        angkatan: [Angkatan]
        angkatanById(id: ID!): [Angkatan]
        cariAngkatan(keyword: String!): [Angkatan]
    }
        extend type Mutation {
        tambahAngkatan(input: AngkatanInput!): Angkatan
        updateAngkatan(
            id: ID!
            input: AngkatanInput!
        ): Angkatan
        deleteAngkatan(id: ID!): Angkatan
        restoreAngkatan(id: ID!): Angkatan
    }
`;

module.exports = typeDefs;
