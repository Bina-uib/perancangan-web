const { Datatypes } = require("sequelize");
const sequelize = require("../../config/database");

const JenisKelamin = sequelize.define(
  "JenisKelamin",
  {
    id_jenis_kelamin: {
        type: Datatypes.UUID,
        defaultValue: Datatypes.UUIDV4,
        primaryKey: true,
    },

    kode: {
        type: Datatypes.CHAR(1),
        allowNull: false,
        unique: true
    },

    nama: {
        type: Datatypes.STRING(20),
        allowNull: false,
    },

    create_at: {
        type: Datatypes.DATE,
        defaultValue: Datatypes.NOW
    },

    update_at: {
        type: Datatypes.DATE,
        defaultValue: Datatypes.NOW
    },

    delete_at: {
        type: Datatypes.DATE,
        allowNull: true
  }
},
{
    tableName: "jenis_kelamin",
    timestamps: false,
  }
);

module.exports = JenisKelamin;