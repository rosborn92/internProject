class ChangeColumnToFirstName < ActiveRecord::Migration[6.0]
  def change
    rename_column :locations, :contact_name, :contact_first_name
  end
end
