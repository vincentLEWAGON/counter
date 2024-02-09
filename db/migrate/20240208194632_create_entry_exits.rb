class CreateEntryExits < ActiveRecord::Migration[7.1]
  def change
    create_table :entry_exits do |t|
      t.references :event, null: false, foreign_key: true
      t.string :action
      t.datetime :timestamp

      t.timestamps
    end
  end
end
