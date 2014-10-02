get '/' do
  erb :index
end

# get '/soldiers' do
#   @soldiers = Soldier.where("country like ?", "%U.S.%").all
#   @all_locales = []
#   p "got the list*******************"
#   @soldiers.each do |soldier|
#     @all_locales << load_soldiers_helper(soldier)
#   end
#   content_type 'json'
#   @all_locales.to_json
# end

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