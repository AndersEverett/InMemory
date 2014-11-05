
def get_geo
  @soldiers = Soldier.where("country like ?", "%U.S.%").all
  @soldiers = @soldiers.where("id > 2462").limit(1000)
  @soldiers.each do |soldier|
    if soldier.longitude == nil
      city = soldier.city
      if city != nil
        city = city.downcase.gsub(/[^[[:word:]]\s]/, '')
        city = city.gsub(' ', '+')
      end
      state = soldier.state_province
      if state != nil
        state = state.downcase.gsub(/[^[[:word:]]\s]/, '')
        state = state.gsub(' ', '+')
      end
      if city && state
        @response = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{city},+#{state}")
        @coord_find = JSON.parse(@response.body)

        if @coord_find != nil
          if @coord_find["results"] != nil
            if @coord_find["results"][0] != nil
              if@coord_find["results"][0]["geometry"] != nil
                if @coord_find["results"][0]["geometry"]["location"] != nil
                  @lat = @coord_find["results"][0]["geometry"]["location"]["lat"]
                  if @lat != nil
                    soldier.latitude = @lat
                  end
                  @long = @coord_find["results"][0]["geometry"]["location"]["lng"]
                  if @long != nil
                    soldier.longitude = @long
                  end
                  p soldier.id
                  soldier.save
                end
              end
            end
          end
        end
      end
    end
  end
end


get_geo

