Rails.application.routes.draw do
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  resources :locations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#index"
end
