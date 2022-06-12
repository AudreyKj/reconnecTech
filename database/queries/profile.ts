const { pool } = require('../db-setUp');
export {}

function getDonationsCount(donor_id:string) {
    return pool.query('SELECT device_count FROM donations WHERE donor_id=$1', [donor_id]);
}

function getRecipientOrderInfo(recipient_id:string) {
    return pool.query('SELECT * FROM orders WHERE recipient_id=$1', [recipient_id]);
}

exports.getDonationsCount = getDonationsCount;
exports.getRecipientOrderInfo = getRecipientOrderInfo;