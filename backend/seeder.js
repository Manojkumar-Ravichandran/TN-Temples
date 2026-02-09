require('dotenv').config();
const mongoose = require('mongoose');
const Temple = require('./src/models/Temple');
const User = require('./src/models/User');

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Clear existing data
        await Temple.deleteMany({});
        await User.deleteMany({});

        // Create Admin
        const admin = await User.create({
            name: 'Admin User',
            email: 'admin@tntemples.com',
            password: 'password123',
            role: 'Admin',
            isVerified: true
        });

        // Create Temples
        const temples = [
            {
                name: 'Meenakshi Amman Temple',
                slug: 'meenakshi-amman-temple',
                deity: 'Meenakshi (Parvati) & Sundareswarar (Shiva)',
                district: 'Madurai',
                location: {
                    type: 'Point',
                    coordinates: [78.1193, 9.9195],
                    address: 'Madurai, Tamil Nadu'
                },
                isApproved: true
            },
            {
                name: 'Brihadeeswarar Temple',
                slug: 'brihadeeswarar-temple',
                deity: 'Shiva',
                district: 'Thanjavur',
                location: {
                    type: 'Point',
                    coordinates: [79.1318, 10.7828],
                    address: 'Thanjavur, Tamil Nadu'
                },
                isApproved: true
            },
            {
                name: 'Ramanathaswamy Temple',
                slug: 'ramanathaswamy-temple',
                deity: 'Shiva',
                district: 'Rameswaram',
                location: {
                    type: 'Point',
                    coordinates: [79.3174, 9.2881],
                    address: 'Rameswaram, Tamil Nadu'
                },
                isApproved: true
            }
        ];

        await Temple.insertMany(temples);
        console.log('Data Seeded Successfully');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedData();
