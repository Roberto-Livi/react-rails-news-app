class UsersController < ApplicationController

    def index
        @users = User.all
        if @users
            render json: {
                users: @users
            }
        else
            render json: {
                status: 500,
                errors: ['no users']
            }
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login
            render json: {
                status: :created,
                user: @user
            }
        else
            render json: {
                status: 500,
                errors: @user.errors.full_messages
            }
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render json: {
                user: @user,
                articles: @user.articles
            }
        else
            render json: {
                status: 500,
                errors: ['user not found']
            }
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation, :admin)
    end

end