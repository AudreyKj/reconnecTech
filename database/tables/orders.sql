CREATE TABLE orders(
id SERIAL PRIMARY KEY,
recipient_id INT NOT NULL REFERENCES recipients(id),
device_type VARCHAR(255),
collection_type VARCHAR(255),
payment_method VARCHAR(255),
order_status VARCHAR(255)
);