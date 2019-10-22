class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :location
      t.string :date
      t.string :contact_name
      t.string :string
      t.string :contact_phone_number
      t.string :contact_email
      t.string :contact_relationship_to_location

      t.timestamps
    end
  end
end
