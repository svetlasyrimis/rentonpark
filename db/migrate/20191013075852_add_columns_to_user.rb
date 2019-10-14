class AddColumnsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :lastname, :string
    add_column :users, :sex, :integer
    add_column :users, :phone_prefix, :string
    add_column :users, :phone, :string
  end
end
