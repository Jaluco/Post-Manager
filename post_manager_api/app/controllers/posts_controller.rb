class PostsController < ApplicationController
    before_action :set_post, only: [:show, :destroy]
  
    # GET /posts
    def index
      @posts = Post.all
      render json: @posts
    end
  
    # POST /posts
    def create
      @post = Post.new(post_params)
  
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /posts/:id
    def destroy
      @post.destroy
      render json: @post
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end
  
    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:name, :description)
    end
  end
  