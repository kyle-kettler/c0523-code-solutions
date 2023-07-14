select "genres"."name" as "genre",
       count("films") as "totalFilms"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "firstName" = 'Lisa' and "lastName" = 'Monroe'
  group by "genre";
