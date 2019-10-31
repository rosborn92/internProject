class AddAddressToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :address_1, :string
    add_column :locations, :address_2, :string
  end
end
