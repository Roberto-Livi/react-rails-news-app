class ArticlesController < ApplicationController

    def index
        @articles = Article.all
        render json: {
            articles: @articles
        }
    end

    def create
        @article = Article.new(article_params)
        if @article.save
            render json: {
                created: true,
                article: @article
            }
        end
            
    end

    def show
        @article = Article.find(params[:id])
        render json: {
            article: @article
        }
    end

    private

    def article_params
        params.require(:article).permit(:title, :preview, :content, :category, :imageurl, :user_id)
    end

end