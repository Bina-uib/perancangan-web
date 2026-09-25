const programstudi = require('../../models/program_studi/programstudiModel');
const resolvers = {
    Query: {
        programstudi: async () => {
            return await programstudi.findAll({
                order: [
                    ["nama", "ASC"]
                ]
            });
        },
        programstudiById: async (_, { id }) => {
            const data = await programstudi.findAll({
                where: {
                    id_program_studi: id
                }
            });
            if (!data) {
                throw new Error("Program Studi tidak ditemukan");
            }
            return data;
        },
        cariProgramStudi: async (_, { keyword }) => {
            const {Op} = require("sequelize");
            return await programstudi.findAll({
                where: {
                    [Op.or]: [
                        {
                            kode: {
                                [Op.like]: `%${keyword}%`
                            }
                        },
                        {
                            nama: {
                                [Op.like]: `%${keyword}%`
                            }
                        }
                    ]
                },
                order: [
                    ["nama", "ASC"]
                ]
            });
        }
    },

    Mutation: {
        tambahProgramStudi: async (_, { input }) => {
            const waktu = new Date();
            return await programstudi.create({
                ...input,
                create_at: waktu,
                update_at: waktu,
                delete_at: null
            });
        },

        updateProgramStudi: async (_, { id, input }) => {
        const data = await programstudi.findOne({
            where: {
                id_program_studi: id
            }
        });
        if (!data) {
            throw new Error("Program Studi tidak ditemukan");
        }
        return await data.update({
            ...input,
            update_at: new Date()
        });

        return data;
        },

        deleteProgramStudi: async (_, { id }) => {
            const data = await programstudi.findOne({
                where: {
                    id_program_studi: id
                }
            });
            if (!data) {
                throw new Error("Program Studi tidak ditemukan");
            }
            await data.update({
                delete_at: new Date(),
                update_at: new Date()
            });
            return data;
        },

        restoreProgramStudi: async (_, { id }) => {
            const data = await programstudi.findOne({
                where: {
                    id_program_studi: id
                }
            });
            if (!data) {
                throw new Error("Program Studi tidak ditemukan");
            }
            await data.update({
                delete_at: null,
                update_at: new Date()
            });
            return data;
        }
    }
};

module.exports = resolvers;