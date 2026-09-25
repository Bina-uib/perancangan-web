const typeDefs = `#graphql
    type programstudi {
        id_program_studi: ID!
        kode: String!
        nama: String!
        create_at: String
        update_at: String
        delete_at: String
    }
        input ProgramStudiInput {
        kode: String!
        nama: String!
    }

    extend type Query {
        programstudi: [programstudi]
        programstudiById(id: ID!): [programstudi]
        cariProgramStudi(keyword: String!): [programstudi]
    }
        extend type Mutation {
        tambahProgramStudi(input: ProgramStudiInput!): programstudi
        updateProgramStudi(
            id: ID!
            input: ProgramStudiInput!
        ): programstudi
        deleteProgramStudi(id: ID!): programstudi
        restoreProgramStudi(id: ID!): programstudi
    }
`;

module.exports = typeDefs;
