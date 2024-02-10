Rails.application.routes.draw do
  get 'users/home'
  devise_for :users
  root 'users#home'

  resources :organizations do
    resources :events do
      member do
        post :increment_audience
        post :decrement_audience
      end
    end
  end
  resources :events, only: [:new, :create]
end
