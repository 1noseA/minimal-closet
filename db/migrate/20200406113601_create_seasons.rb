class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.string :name,          null: false
      t.integer :constant
      t.timestamps
    end
  end
end
