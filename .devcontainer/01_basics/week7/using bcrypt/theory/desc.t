-> Storing the password in plain text is very dangerous
-> Hence we need to hash the password
-> Drawbacks of hashing: (It is deterministic: So the original password can be generated) && 
(If more than one person has the same password that would result again into a security breach)

-> Hence we do hashing with salting, with the help of which the chances of getting the original password becomes computationally heavy

-> For seeing how the salting is helpful during the times of signup and signin, and how they are stored in the DB, refer both the images