class CreateOrganisations < ActiveRecord::Migration[7.1]
  def change
    create_table :organisations do |t|
      t.string :name
      t.string :address
      t.string :postal_code
      t.string :city

      t.timestamps
    end
  end
end
