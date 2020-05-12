class CreateClothingVariations < ActiveRecord::Migration[6.0]
  def change
    create_table :clothing_variations do |t|
      t.text :description
      t.string :color
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
