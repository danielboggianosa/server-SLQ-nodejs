"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'dummy_data',
    user: 'root',
    pass: 'Admin_123456',
    connection: {
        host: '34.95.234.214',
        logging: false,
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'America/Lima',
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: true,
            paranoid: true,
        }
    }
};
