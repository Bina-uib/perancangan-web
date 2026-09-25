const mahasiswa = require('../../models/mahasiswa/mahasiswaModel');
const resolvers = {
    Query: {
        mahasiswa: async () => {
            return await mahasiswa.findAll({
                order: [
                    ["nama", "ASC"]
                ]
            });
        },
        mahasiswaById: async (_, { id }) => {
            const data = await mahasiswa.findAll({
                where: {
                    id_mahasiswa: id
                }
            });
            if (!data) {
                throw new Error("Mahasiswa tidak ditemukan");
            }
            return data;
        },
        cariMahasiswa: async (_, { keyword }) => {
            const {Op} = require("sequelize");
            return await mahasiswa.findAll({
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
        tambahMahasiswa: async (_, { input }) => {
            const waktu = new Date();
            return await mahasiswa.create({
                ...input,
                create_at: waktu,
                update_at: waktu,
                delete_at: null
            });
        },

        updateMahasiswa: async (_, { id, input }) => {
        const data = await mahasiswa.findOne({
            where: {
                id_mahasiswa: id
            }
        });
        if (!data) {
            throw new Error("Mahasiswa tidak ditemukan");
        }
        return await data.update({
            ...input,
            update_at: new Date()
        });

        return data;
        },

        deleteMahasiswa: async (_, { id }) => {
            const data = await mahasiswa.findOne({
                where: {
                    id_mahasiswa: id
                }
            });
            if (!data) {
                throw new Error("Mahasiswa tidak ditemukan");
            }
            await data.update({
                delete_at: new Date(),
                update_at: new Date()
            });
            return data;
        },

        restoreMahasiswa: async (_, { id }) => {
            const data = await mahasiswa.findOne({
                where: {
                    id_mahasiswa: id
                }
            });
            if (!data) {
                throw new Error("Mahasiswa tidak ditemukan");
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