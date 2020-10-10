class AddImageurlToArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :imageurl, :string
  end
end
