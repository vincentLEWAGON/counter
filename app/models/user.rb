class User < ApplicationRecord
  before_save :default_values

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :memberships
  has_many :organizations, through: :memberships
  has_many :events, through: :organizations

  def default_values
    self.category ||= 'lecteur'
  end
end
