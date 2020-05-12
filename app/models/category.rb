class Category < ApplicationRecord
  belongs_to :user
  has_many :clothing_variations
end
