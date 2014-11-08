require 'yaml/store'

Coord_pair = Struct.new :latitude, :longitude

def store_lat_lngs(all_coords)
  
  store = YAML::Store.new "lat_longs.store"
  store.transaction do
    store["points"] = []
  end
  all_coords.each do |set|
    coords = Coord_pair.new(set.latitude, set.longitude)
    store.transaction do
      store["points"] << coords
    end
  end
end

def get_lat_lngs       #hit this with route to feed map from yaml
  p "in store"	
  coord_hash = YAML.load(File.read("lat_longs.store"))
end