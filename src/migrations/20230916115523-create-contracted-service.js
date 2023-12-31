"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Contracted_services", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            service_id: {
                type: Sequelize.INTEGER,
            },
            event_id: {
                type: Sequelize.INTEGER,
            },
            service_company_id: {
                type: Sequelize.INTEGER,
            },
            cost: {
                type: Sequelize.DECIMAL,
            },
            paid: {
                type: Sequelize.DECIMAL,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Contracted_services");
    },
};
