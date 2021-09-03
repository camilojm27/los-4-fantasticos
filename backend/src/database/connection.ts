import { Sequelize } from "sequelize-typescript";

export const db = new Sequelize("ricuritas", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  //logging: false,
});

export async function connectDB() {
  await db.authenticate();
  console.log("Database is connected");
}
