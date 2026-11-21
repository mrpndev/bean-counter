/* 
	? Challenge
	* create a model to store our coffee
	* the table should be named recipe
	* it should contain the following columns:
		* coffeeName (string) required
		* roaster (string)
		* brewMethod (string) required
		! SPICEY MODE
		* instead of string on brewMethod, enum of multiple values
		* espresso, drip, pourover, frenchPress, aeropress
		* default to espresso
		* grinder (string) (required)
		* grindSize (number) (required)
		* doseIn (number) (required)
		* doseOut (number) (required)
		* time (number) (required)
	* feel free to think of any other validations and constraints
	* success means a table appears in your pgadmin
*/

const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Recipe = sequelize.define(
	"recipe",
	{
		coffeeName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		roaster: {
			type: DataTypes.STRING(125),
		},
		brewMethod: {
			type: DataTypes.ENUM(
				"espresso",
				"pourover",
				"drip",
				"aeropress",
				"french press"
			),
			allowNull: false,
			defaultValue: "espresso",
		},
		grinder: {
			type: DataTypes.STRING(125),
			allowNull: false,
		},
		grindSize: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		doseIn: {
			type: DataTypes.INTEGER,
			validate: { min: 0 },
			allowNull: false,
		},
		doseOut: {
			type: DataTypes.INTEGER,
			validate: { min: 0 },
			allowNull: false,
		},
		time: {
			type: DataTypes.INTEGER,
			validate: { min: 0 },
			allowNull: false,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Recipe;
