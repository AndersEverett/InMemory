get '/' do
  erb :index
end

get '/soldiers' do
  @soldiers = Soldier.where("country like ?", "%U.S.%").all
  @all_locales = []
  @soldiers.each do |soldier|
    @all_locales << load_soldiers_helper(soldier)
  end
  content_type 'json'
  @all_locales.to_json
end

