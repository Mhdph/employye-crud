import { connect, connection } from "mongoose";

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.v5ruw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connectMongo = async () => {
  connect(uri);
  const db = connection;
  db.on("error", (err) => {
    console.log("404 Not Found", err);
  });
  db.once("open", () => {
    console.log("Connection successfull....");
  });
};

export default connectMongo;
