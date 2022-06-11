CREATE TABLE donations(
id SERIAL PRIMARY KEY,
donor_id INT NOT NULL REFERENCES donors(id),
device_type VARCHAR(255),
device_count VARCHAR(255),
device_condition VARCHAR(255),
device_collection VARCHAR(255)
);