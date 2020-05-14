Rails.application.routes.draw do
  resources :clothing_variations
  resources :categories
  # get 'categories/:category_id/clothing_variations/:clothing_variation_id', to: 'categories#add_clothing_variation'


# ================AUTH=======================================
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
