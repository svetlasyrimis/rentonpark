class User < ApplicationRecord
  enum sex: %i[masculino femenino]
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
