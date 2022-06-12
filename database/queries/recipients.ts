const { pool } = require('../db-setUp');
export {}

function registerRecipient(firstName:string, lastName:string, email:string, streetAddress:string, countryLocation:string, cityLocation:string, accountPassword:string, voucher:string, govIssuedNumber:string) {
    return pool.query(
        `INSERT INTO recipients(first_name, last_name, email, street_address, country_location, city_location, account_password, voucher, gov_issued_number)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [firstName, lastName, email, streetAddress, countryLocation, cityLocation, accountPassword, voucher, govIssuedNumber]
    );
}



function orderDevice(recipientId:string, deviceType:string, collectionMethod:string, paymentMethod:string, status:string) {
    return pool.query(
        `INSERT INTO orders(recipient_id, device_type, collection_type, payment_method, order_status)
    VALUES ($1, $2, $3) RETURNING *`,
        [recipientId, deviceType, collectionMethod, paymentMethod, status]
    );
}

function verifyUserRecipients(email:string) {
    return pool.query(`SELECT id, account_password FROM recipients where email=$1`, [
        email
    ]);
}

exports.registerRecipient = registerRecipient;
exports.orderDevice = orderDevice;
exports.verifyUserRecipients = verifyUserRecipients;

