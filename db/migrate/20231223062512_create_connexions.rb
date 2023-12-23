class CreateConnexions < ActiveRecord::Migration[7.1]
  def change
    create_table :connexions do |t|
      t.references :organisation, null: false, foreign_key: true
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
