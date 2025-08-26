import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://evansondiekinyakundi:ghost123ghostN@cluster0.etoagko.mongodb.net/Fruit-Ecommerce"
      )
      .then(() => {
        console.log("Database Connected");
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB