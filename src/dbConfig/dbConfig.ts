import mongoose from "mongoose";
export async function Connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongo DB Connect Successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongo connection error. Please make sure MongoDB is running " + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("somthing went wrong!");
    console.log(error);
  }
}
