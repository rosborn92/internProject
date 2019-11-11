class RemoveStringFromBookings < ActiveRecord::Migration[6.0]
  def change
    remove_column :bookings, :string, :string
  end
end
