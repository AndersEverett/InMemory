get '/' do
  erb :index
end

get '/soldiers' do
  content_type 'json'
  @soldiers = Soldier.where("country like ?", "%U.S.%").all
  @soldiers = @soldiers.where("id < 1000").limit(5)
  @all_locales = []
  p "got the list of soldiers*******************"
  @soldiers.each do |soldier|
    @all_locales.push(load_soldiers_helper(soldier))
  end
  p @all_locales.to_json
end

# get '/' do
#  @soldiers = Soldier.where("country like ?", "%U.S.%").all
#  @soldiers.each do |soldier|
#     if soldier.longitude == nil
#       city = soldier.city
#       if city != nil
#         city = city.downcase.gsub(/[^[[:word:]]\s]/, '')
#         city = city.gsub(' ', '+')
#       end
#       state = soldier.state_province
#       if state != nil
#         state = state.downcase.gsub(/[^[[:word:]]\s]/, '')
#         state = state.gsub(' ', '+')
#       end
#       if city && state
# 		@response = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{city},+#{state}")
#       end
#       @response.to_json
#     end
#   # @coord_find = JSON.parse(@response.body)
# end
