# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
ClothingVariation.destroy_all

User.create(first_name: "Cherelle", last_name: "Townes", username: "cherelle", email: "cherelle@email.com", password: "123456")

p "#{User.count} user(s) created"

Category.create(name: "dress", user_id: 1)
Category.create(name: "top", user_id: 1)
Category.create(name: "skirt", user_id: 1)
Category.create(name: "bottoms", user_id: 1)

p "#{Category.count} categories created"

ClothingVariation.create(description: "Knee length with a vneck and long sleeves", color: "Black", category_id:1)
ClothingVariation.create(description: "Ankle length with a circle and short sleeves", color: "Pink", category_id: 1)
ClothingVariation.create(description: "Long sleeve top with vneck", color: "Yellow", category_id: 2)

p "#{ClothingVariation.count} clothing variations created"