class Event < ApplicationRecord
  belongs_to :organization
  has_many :entry_exits
end
