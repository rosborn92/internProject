# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_30_164832) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.string "location"
    t.string "date"
    t.string "contact_name"
    t.string "contact_phone_number"
    t.string "contact_email"
    t.string "contact_relationship_to_location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "location_id"
    t.index ["location_id"], name: "index_bookings_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "location_type"
    t.string "contact_first_name"
    t.string "contact_adress"
    t.string "contact_phone"
    t.string "contact_email"
    t.string "contact_relationship"
    t.string "adress_city"
    t.string "adress_state"
    t.integer "adress_zip"
    t.string "location_phone"
    t.string "reference"
    t.string "school_principal"
    t.string "principal_email"
    t.string "county_district"
    t.string "city_district"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "contact_last_name"
  end

end
