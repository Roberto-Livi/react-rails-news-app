class Article < ApplicationRecord
    belongs_to :user
    has_one_attached :image
    validates :title, :preview, :content, presence: true
end