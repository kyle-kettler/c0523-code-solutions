DELETE
FROM
  "films"
WHERE NOT
  "rating" = 'G'
RETURNING *;
