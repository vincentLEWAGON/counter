class Organisation < ApplicationRecord
  has_many :connexions
  has_many :events, through: :connexions
  has_many :users, through: :connexions
  validates :name, presence: true
end
