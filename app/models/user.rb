class User < ApplicationRecord
  has_secure_password
  has_many :categorys

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  def return_data
    {
      id:id,
      username: username,
      email: email,
      created_at: created_at,
      updated_at: updated_at,
    }
  end
end