class ArticlesController > ApplicationController

    def index
        @articles = Article.all
        render json: {
            articles: @articles
        }
    end

    def create
        @article = Article.new(article_params)
        if @article.save
            current_user.articles.create(article_params)
            render json: {
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
        params.require(:article).permit(:title, :preview, :content, :user_id)
    end

end