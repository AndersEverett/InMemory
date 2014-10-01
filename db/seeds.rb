    
require 'csv'

CSV.parse(File.read('db/afghanistan.csv'), headers: true) do |row|
  Soldier.create(row.to_hash)
end

CSV.parse(File.read('db/iraq.csv'), headers: true) do |row|
  Soldier.create(row.to_hash)
end



