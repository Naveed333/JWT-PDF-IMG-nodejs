const mongoose = require("mongoose");

const taskShema = new mongoose.Schema(
	{
		discription: {
			type: String,
			required: true,
			trim: true,
		},
		complete: {
			type: Boolean,
			default: false,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			require: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

const Task = mongoose.model("Task", taskShema);

module.exports = Task;
