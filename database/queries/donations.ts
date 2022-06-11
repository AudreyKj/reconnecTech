const { pool } = require('../db-setUp');
export {}

function registerDonor(first_name: string, last_name: string, email: string, country_location: string, city_location: string, account_password: string,
    company_name: string, share_donations_public: boolean) {
    return pool.query(
        `INSERT INTO donors (first_name, last_name, email, country_location, city_location, account_password,
            company_name, share_donations_public)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [first_name, last_name, email, country_location, city_location, account_password,
            company_name, share_donations_public]
    );
}


function submitDonation(device_type:string, device_count:number, device_condition:string, device_collection:string, donor_id:string) {
    return pool.query(
        `INSERT INTO donations(device_type, device_count, device_condition, device_collection, donor_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [device_type, device_count, device_condition, device_collection, donor_id]
    );
}

exports.registerDonor = registerDonor;
exports.submitDonation = submitDonation;