class RemoveAddressStreetFromLocations < ActiveRecord::Migration[6.0]
  def change
    remove_column :locations, :address_street
  end
end
