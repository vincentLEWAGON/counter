class AddAudienceToEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :audience, :integer
  end
end
