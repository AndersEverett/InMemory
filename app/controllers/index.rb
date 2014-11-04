get '/' do
  erb :index
end


# get '/soldiers' do
#   content_type 'json'
#   @soldiers = Soldier.where("country like ?", "%U.S.%").all
#   @soldiers = @soldiers.limit(300)
#   @all_locales = []
#   p "got the list of soldiers*******************"
#   @soldiers.each do |soldier|
#     @all_locales.push(load_soldiers_helper(soldier))
#   end
#   p @all_locales.to_json
# end

get '/soldiers' do
  content_type 'json'
  @sols = Soldier.limit(1000).select("latitude", "longitude")
  p @sols[1..10]
  @sols.to_json  #problem?
end
