class AddContactLastNameToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :contact_last_name, :string
  end
end
