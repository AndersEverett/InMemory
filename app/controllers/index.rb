get '/' do
  erb :index
end


# get '/soldiers' do				#using lat longs for reverse geocoding 
#   content_type 'json'
#   @sols = Soldier.select("latitude", "longitude")
#   store_lat_lngs(@sols)        #preparing lat longs to yaml for alt persistence & Heroku performance improvement
#   # @sols.to_json  
# end


get '/soldiers' do		#alt route to feed map from yaml store
  content_type 'json'
  pin_points = get_lat_lngs
  pin_points.to_json  
end
