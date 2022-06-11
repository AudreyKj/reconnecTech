CREATE TABLE donors(
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
email VARCHAR(255),
country_location VARCHAR(255),
city_location VARCHAR(255),
account_password VARCHAR(255),
company_name VARCHAR(255),
share_donations_public BOOLEAN
);
