class Connexion < ApplicationRecord
  belongs_to :organisation
  belongs_to :event
  belongs_to :user
end
