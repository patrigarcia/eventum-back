"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {
        static associate(models) {
            Location.belongsTo(models.Facilities, {
                foreignKey: "facility_id",
                as: "facility",
            });

            Location.hasMany(models.Event, {
                foreignKey: "location_id",
                as: "events",
            });

            Location.belongsToMany(models.Amenities, {
                through: models.Location_amenities,
                foreignKey: "location_id",
                as: "amenities",
            });
        }
    }

    Location.init(
        {
            facility_id: DataTypes.INTEGER,
            meeting_room: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            capacity: DataTypes.INTEGER,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Location",
            tableName: "Locations",
        }
    );

    return Location;
};
