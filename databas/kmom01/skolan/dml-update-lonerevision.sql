-- sum lon
--SELECT SUM(lon) AS Lönesummaa, SUM(kompetens) AS Kompetens FROM larare;

-- Lonepott 
--SELECT SUM(lon) AS Lonesumma , SUM(lon * 0.064) AS Lonepott FROM larare;


--Albus kompetens är nu 7 och lönen har ökat till 85 000.
UPDATE larare SET kompetens = 7, lon = 85000 WHERE fornamn = 'Albus';

--Minervas lön har ökat med 4 000.
UPDATE larare SET lon = lon + 4000 WHERE fornamn = 'Minerva';

--Argus har fått ett risktillägg om 2 000 och kompetensen är satt till 3.
UPDATE larare SET kompetens = 3, lon = lon + 2000 WHERE fornamn = 'Argus';

--Gyllenroy och Alastor har hög frånvaro och har fått ett löneavdrag med 3 000.
UPDATE larare SET lon = lon - 3000 WHERE fornamn = 'Gyllenroy' OR fornamn = 'Alastor';

--Alla lärare på avdelningen DIDD fick en extra lönebonus om 2%.
UPDATE larare SET lon = lon + lon * 0.02 WHERE avdelning = 'DIDD';

--Alla låglönade kvinnliga lärare, de som tjänar färre än 40 000, fick en lönejustering om extra 3%.
UPDATE larare SET lon = lon + lon * 0.03 WHERE kon = 'K' AND lon < 40000;

--Ge Snape, Minerva och Hagrid ett extra lönetillägg om 5 000 för extra arbete de utför åt Albus och öka deras kompetens med +1.
UPDATE larare SET lon = lon + 5000, kompetens = kompetens + 1 WHERE fornamn IN ('Minerva', 'Hagrid') OR efternamn = 'Snape';

--Ge alla lärare en ökning om 2.2% men exkludera Albus, Snape, Minerva och Hagrid som redan fått tillräckligt.
UPDATE larare SET lon = lon + lon * 0.022 WHERE NOT fornamn IN ('Minerva', 'Hagrid', 'Albus') AND NOT efternamn IN ('Snape');


-- info to show
SELECT * FROM larare;
SELECT Sum(lon) AS Lönesumma FROM larare;
SELECT (Sum(lon) - 305000) / 305000 * 100 AS 'Lönesumma ökning %' FROM larare;
SELECT Sum(kompetens) AS Kompetens FROM larare;


-- source ./dml-update-lonerevision.sql