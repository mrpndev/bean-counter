// ? import sequelize from db configuration to grab your config
const sequelize = require("../config/db")
const { DataTypes } = require("sequelize")

/* 
	? Schema
	* a well defined structure of our data
	* allows us to outline:
		* table
		* columns
		* constraints
		* requirements
		* any extra built-in functionality
	* it ultimately builds a model
	
	? Model
	* abstration representing our data
*/

const User = sequelize.define(
	"user",
	{
		fullName: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			validate: {
				is: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				min: 10
			}
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: {
					args: /^\+?[1-9]\d{1,14}$/
				}
			}
		}
	},
	{
		timestamps: true,
	}
)

module.exports = User