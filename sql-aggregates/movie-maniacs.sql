select "customerId",
       "c"."firstName" as "firstName",
       "c"."lastName" as "lastName",
       sum("payments"."amount") as "amountSpent"
  from "customers" as "c"
  join "payments" using ("customerId")
  group by "customerId"
  order by "amountSpent" desc;
