def load_soldiers_helper(soldier)  			#call for each entry in db in route to pass to httparty/ get long/lat from google maps
  @long_lat = []                            #ajax request from maps js to hit route
  @long_lat << soldier.city << soldier.state_province
end
