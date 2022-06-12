const { pool } = require('../db-setUp');
export {}

function registerRecipient(first_name:string, last_name:string, email:string, street_address:string, country_location:string, city_location:string, account_password:string, voucher:string, gov_issued_number:string) {
    return pool.query(
        `INSERT INTO recipients(first_name, last_name, email, street_address, country_location, city_location, account_password, voucher, gov_issued_number)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [first_name, last_name, email, street_address, country_location, city_location, account_password, voucher, gov_issued_number]
    );
}


exports.registerRecipient = registerRecipient;
