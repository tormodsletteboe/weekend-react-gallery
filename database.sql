-- CREATE DATABASE: react_gallery
DROP TABLE IF EXISTS "galleryList";
-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "galleryList" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(80), 
    "description" VARCHAR(80), 
    "likes" INT DEFAULT 0
);

INSERT INTO "galleryList" ("path", "description")
	VALUES 
	('https://picsum.photos/id/236/200', 'House on the rocks'),
	('https://picsum.photos/id/10/200', 'Forest overlooking a fjord'),
	('https://picsum.photos/id/1001/200', 'Dad carrying son on beach'),
	('https://picsum.photos/id/237/200', 'Black labrador puppy looking at camera'),
	('https://picsum.photos/id/1000/200', 'Christian cross on windy snowy mountain top'),
    ('https://picsum.photos/id/235/200', 'Lake infront of snow capped mountain'),
    ('https://picsum.photos/id/15/200', 'Wet rocks in front of tall water fall'),
    ('https://picsum.photos/id/101/200', 'Concrete villa that looks like a WW2 german bunker'),
    ('https://picsum.photos/id/26/200', 'Items on table, sunglasses watch etc'),
    ('https://picsum.photos/id/1/200', 'Man typing on a laptop. Viewed from side of shoulder top down');