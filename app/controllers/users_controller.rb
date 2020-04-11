class UsersController < ApplicationController
  def index
    @users = User.all.page(params[:page]).per(10)
    @user = current_user
    @count = User.all
  end

  def show
    @user = User.find(params[:id])
    #ユーザーが登録したアイテム
    @items = @user.items
    @categories = Category.all
    #@categories = @items.where(category_id: params[:category_id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  private 
    def user_params
      params.require(:user).permit(:name, :profile_image, :introduction)
    end
end