Rails.application.routes.draw do
  get 'users/home'
  devise_for :users
  root 'users#home'

  resources :organizations do
    resources :events
  end
end
