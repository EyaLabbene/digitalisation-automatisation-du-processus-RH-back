const mongoose = require("mongoose");

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	maxPoolSize: 10,
	//autoIndex: false,
};

var db;

const connect = async () => {
	try {
       
		db = await mongoose.connect(process.env.MONGO_URL, options);
		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const get = () => {
	return db;
};

exports.getDB = get;
exports.connectDB = connect