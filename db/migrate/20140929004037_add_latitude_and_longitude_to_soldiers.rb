class AddLatitudeAndLongitudeToSoldiers < ActiveRecord::Migration
  def change
    add_column :soldiers, :latitude, :float
    add_column :soldiers, :longitude, :float
  end
end
