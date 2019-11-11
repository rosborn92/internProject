class AddLocationRefToBookings < ActiveRecord::Migration[6.0]
  def change
    add_reference :bookings, :location, foreign_key: true
  end
end
