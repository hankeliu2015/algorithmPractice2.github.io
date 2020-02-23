// Query all columns for all American cities in CITY with populations larger than 100000. The CountryCode for America is USA.

// SELECT * FROM city WHERE population > 100000 AND countrycode = "USA"


// Query the names of all American cities in CITY with populations larger than 120000. The CountryCode for America is USA.

// SELECT name FROM city WHERE population > 120000 AND countrycode = 'USA';

// Query a list of CITY and STATE from the STATION table
// SELECT city, state FROM station;

// Query a list of CITY names from STATION with even ID numbers only. You may print the results in any order, but must exclude duplicates from your answer.

SELECT city FROM station
