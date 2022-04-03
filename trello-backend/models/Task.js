const { Schema, model } = require("./connection");

const taskSchema = Schema(
  {
    entry: {
      required: true,
      type: String,
    },
    status: {
      type: String,
      required: true,
      default: "TO_DO",
      Enum: ["TO-DO", "PENDING", "COMPLETED"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Task', taskSchema)
