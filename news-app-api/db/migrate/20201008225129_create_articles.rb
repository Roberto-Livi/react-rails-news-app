class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :preview
      t.string :content
      t.date :date
      t.time :time
      t.integer :user_id
    end
  end
end
