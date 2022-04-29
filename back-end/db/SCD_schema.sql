DROP DATABASE IF EXISTS stonedcolddreamery_db;
CREATE DATABASE stonedcolddreamery_db;

\c stonedcolddreamery_db;

DROP TABLE IF EXISTS products;

CREATE TABLE smokes (
    id SERIAL PRIMARY KEY,
    size TEXT,
    strain TEXT,
    brand TEXT,
    price NUMERIC,
);

CREATE TABLE tokes (
    id SERIAL PRIMARY KEY,
    size TEXT,
    brand TEXT,
    material TEXT,
    price NUMERIC,
)

CREATE TABLE accessories (
    id SERIAL PRIMARY KEY,
    size TEXT,
    brand TEXT,
    price NUMERIC,
)