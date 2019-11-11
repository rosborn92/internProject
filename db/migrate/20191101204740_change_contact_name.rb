class ChangeContactName < ActiveRecord::Migration[6.0]
  def change
    rename_column :bookings, :contact_name, :contact_first_name
    add_column :bookings, :contact_last_name, :string
  end
end