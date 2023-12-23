# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_12_23_062512) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "connexions", force: :cascade do |t|
    t.bigint "organisation_id", null: false
    t.bigint "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_connexions_on_event_id"
    t.index ["organisation_id"], name: "index_connexions_on_organisation_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.time "start_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organisations", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "postal_code"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "participants", force: :cascade do |t|
    t.string "genre"
    t.string "cat1"
    t.string "cat2"
    t.string "cat3"
    t.bigint "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_participants_on_event_id"
  end

  add_foreign_key "connexions", "events"
  add_foreign_key "connexions", "organisations"
  add_foreign_key "participants", "events"
end
