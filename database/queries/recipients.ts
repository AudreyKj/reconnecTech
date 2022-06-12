const { pool } = require('../db-setUp');
export {}

function registerRecipient(first_name:string, last_name:string, email:string, street_address:string, country_location:string, city_location:string, account_password:string, voucher:string, gov_issued_number:string) {
    return pool.query(
        `INSERT INTO recipients(first_name, last_name, email, street_address, country_location, city_location, account_password, voucher, gov_issued_number)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [first_name, last_name, email, street_address, country_location, city_location, account_password, voucher, gov_issued_number]
    );
}



function orderDevice(recipient_id:string, device_type: string, order_status: string) {
    return pool.query(
        `INSERT INTO orders(recipient_id, device_type, order_status)
    VALUES ($1, $2, $3) RETURNING *`,
        [recipient_id, device_type, order_status]
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

