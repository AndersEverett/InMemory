class CreateSoldiers < ActiveRecord::Migration
  def change
  	create_table :soldiers do |t|
      t.string :last_name
      t.string :rest_name
      t.text :suffix
      t.text :prefix
      t.string :status
      t.text :gender
      t.integer :age
      t.string :city
      t.string :state_province
      t.string :country
      t.text :force
      t.string :service_branch
      t.string :service_force
      t.string :service_unit
      t.string :service_unit_location
      t.string :service_unit_state
      t.string :occupation_job_title
      t.date :death_date
      t.date :incident_date
      t.string :incident_cause
      t.string :incident_location
      t.text :incident_detail

      t.timestamps
    end
  end
end
