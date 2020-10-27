import 'dotenv/config.js';
import 'colors';

import connectDB from './config/db.js';

import Order from './models/orderModel.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';

import users from './data/users.js';
import products from './data/products.js';

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log(`Data Destroyed`.green.inverse);

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0];

    const sampleProducts = products.map((pdt) => ({
      ...pdt,
      user: adminUser._id,
    }));

    await Product.insertMany(sampleProducts);

    console.log(`Sample data Imported`.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log(`Data Destroyed`.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

// console.log(process.argv);
// process.exit();
