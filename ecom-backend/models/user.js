const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },

        email:{
            type: String,
            require: true,
            unique: true,
            lowercase: true
        },

        password:{
            type: String,
            require: true,
        },

        role:{
            type: String,
            enum: ["user", "admin"],
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)