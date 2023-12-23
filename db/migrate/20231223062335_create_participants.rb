class CreateParticipants < ActiveRecord::Migration[7.1]
  def change
    create_table :participants do |t|
      t.string :genre
      t.string :cat1
      t.string :cat2
      t.string :cat3
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
