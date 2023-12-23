Rails.application.routes.draw do
  get 'organisations/index'
  get 'organisations/show'
  get 'organisations/new'
  get 'organisations/create'
  get 'organisations/edit'
  get 'organisations/update'
  get 'organisations/destroy'
  get 'participants/index'
  get 'participants/show'
  get 'participants/new'
  get 'participants/create'
  get 'participants/edit'
  get 'participants/update'
  get 'participants/destroy'
  get 'events/index'
  get 'events/show'
  get 'events/new'
  get 'events/create'
  get 'events/edit'
  get 'events/update'
  get 'events/destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
