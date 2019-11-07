class RemoveLocationColumn < ActiveRecord::Migration[6.0]
  def change
      remove_column :bookings, :location
  end
end
