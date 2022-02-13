UPDATE colleges
SET city = locations.city, state=locations.state
from locations
WHERE colleges.city is null
and colleges.name = locations.name

SELECT name, distance.round(distance)::integer
FROM public.distance;

pdate wash_parcels_final
    set type_ = ww.religious 
    from wash_worship ww  
    where st_intersects(ww.geom, wash_parcels_final.geom);