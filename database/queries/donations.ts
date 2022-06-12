const { pool } = require('../db-setUp');
export {}

function registerDonor(firstName:string, lastName:string, password:string, companyName:string, city:string, country:string, email:string) {
    return pool.query(
        `INSERT INTO donors (first_name, last_name,  account_password, company_name, city_location, country_location, email)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [firstName, lastName, password, companyName, city, country, email]
    );
}


function submitDonation(deviceCondition:string, deviceCollection:string, deviceCount:number, deviceType:string, newDonorId:string) {
    return pool.query(
        `INSERT INTO donations(device_condition, device_collection, device_count, device_type, donor_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [deviceCondition, deviceCollection, deviceCount, deviceType, newDonorId]
    );
}

function verifyUserDonors(email:string) {
    return pool.query(`SELECT id, account_password, company_name  FROM donors where email=$1`, [
        email
    ]);
}

exports.registerDonor = registerDonor;
exports.submitDonation = submitDonation;
exports.verifyUserDonors = verifyUserDonors;