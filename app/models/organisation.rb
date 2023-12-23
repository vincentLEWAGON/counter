class Organisation < ApplicationRecord
  has_many :connexions, dependent: :destroy
  has_many :events, through: :connexions
  validates :name, presence: true
end
