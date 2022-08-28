const { pool } = require('../db-setUp');
export {}

function registerRecipient(firstName:string, lastName:string, accountPassword:string, email:string, city:string,govIssuedNumber:string) {
    return pool.query(
        `INSERT INTO recipients(first_name, last_name, account_password, email, city_location, gov_issued_number)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [firstName, lastName, accountPassword, email, city, govIssuedNumber]
    );
}

function orderDevice(recipientId:string, deviceType:string, collectionMethod:string, paymentMethod:string, status:string) {
    return pool.query(
        `INSERT INTO orders(recipient_id, device_type, collection_type, payment_method, order_status)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [recipientId, deviceType, collectionMethod, paymentMethod, status]
    );
}

function verifyUserRecipients(email:string) {
    return pool.query(`SELECT * FROM recipients where email=$1`, [
        email
    ]);
}

exports.registerRecipient = registerRecipient;
exports.orderDevice = orderDevice;
exports.verifyUserRecipients = verifyUserRecipients;

