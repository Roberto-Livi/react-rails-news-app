if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: 'react-rails-news-app'
  else
    Rails.application.config.session_store :cookie_store, key: 'react-rails-news-app' 
end