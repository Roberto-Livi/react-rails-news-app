class UsersController < ApplicationController

    def index
        @users = User.all
        if @users
            render json: {
                users: @users
            }
        if 
        
        else
        
        end
        end
    end

    def create
    end

    def show
    end

    private

    def user_params
    end

end