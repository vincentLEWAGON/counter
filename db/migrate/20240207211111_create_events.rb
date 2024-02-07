class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.date :start_date
      t.datetime :start_time
      t.integer :max_gauge
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
