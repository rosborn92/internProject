class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :type
      t.string :contact_name
      t.string :contact_phone_number
      t.string :contact_email
      t.string :contact_relationship
      t.string :address_street
      t.string :address_city
      t.string :address_state
      t.integer :address_zip
      t.string :phone_number
      t.string :reference
      t.string :school_principal
      t.string :principal_email
      t.string :school_district
      t.string :county_district
      t.string :city_district

      t.timestamps
    end
  end
end
