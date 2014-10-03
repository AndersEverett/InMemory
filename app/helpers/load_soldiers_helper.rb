def load_soldiers_helper(soldier)  			#call for each entry in db in route to pass to httparty/ get long/lat from google maps
  @address = []                            #ajax request from maps js to hit route
  @address << soldier.city << soldier.state_province
end
