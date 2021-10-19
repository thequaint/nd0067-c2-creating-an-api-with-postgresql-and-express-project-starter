/* Replace with your SQL commands */
CREATE TABLE orders(id SERIAL PRIMARY KEY,productids integer ARRAY,quantitys integer ARRAY,user_id integer REFERENCES users(id));