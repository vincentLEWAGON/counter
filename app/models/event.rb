class Event < ApplicationRecord
  has_many :participants, dependent: :destroy
  has_many :connexions
  has_many :organisations, through: :connexions
  validates :name, presence: true
  validates :date, presence: true
end
