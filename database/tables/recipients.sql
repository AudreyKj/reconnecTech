CREATE TABLE recipients(
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
email VARCHAR(255),
street_address VARCHAR(255),
country_location VARCHAR(255),
city_location VARCHAR(255),
account_password VARCHAR(255),
voucher VARCHAR(255),
gov_issued_number VARCHAR(255)
);