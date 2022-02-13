
create table enrollments 
as
SELECT (row_number() over())::int id, values::integer value, website_id, colleges_id college_id
FROM (
SELECT round(enrollment.id) id, round(value) values, enrollment.url enrollment_url, enrollment.name enrollment_name, websites.id website_id, websites.url website_url, colleges.id colleges_id
FROM enrollment
left join websites
on enrollment.url = websites.url
left join colleges
on colleges.name = enrollment.name
) t1


 SELECT 
 colleges.name,
    colleges.city,
    colleges.state,
    colleges.distance,
    colleges.disqualified_reason,
    colleges.notes,
    enrollments.value enrolled,
    enrollments_websites.url enrollment_url,
    website_costs.cost,
    costs_websites.url cost_url
   FROM colleges
     LEFT JOIN costs ON colleges.id = costs.college_id
     LEFT JOIN website_costs ON costs.cost_id = website_costs.id
     LEFT JOIN enrollments ON colleges.id = enrollments.college_id
     LEFT JOIN websites enrollments_websites ON enrollments_websites.id = enrollments.website_id
     LEFT JOIN websites costs_websites ON costs_websites.id = website_costs.website_id
  ORDER BY colleges.name;
  
   SELECT colleges.name,
    colleges.city,
    colleges.state,
    colleges.distance,
    colleges.disqualified_reason,
    colleges.notes,
    website_costs.cost,
    websites.url
   FROM colleges
     LEFT JOIN costs ON colleges.id = costs.college_id
     LEFT JOIN website_costs ON costs.cost_id = website_costs.id
     LEFT JOIN websites ON websites.id = website_costs.website_id
  ORDER BY colleges.name;
  
  