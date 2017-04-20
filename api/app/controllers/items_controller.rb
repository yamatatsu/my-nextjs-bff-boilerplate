class ItemsController < ApplicationController
  before_action :set_item, only: [:show]

  # GET /items
  def index
    render json: [
      { id: 1, name: '飴' },
      { id: 2, name: 'チョコ' },
      { id: 3, name: 'キャラメル' },
    ]
  end

  # GET /items/1
  def show
    render json: { id: 2, name: 'チョコ' }
  end

  # # POST /items
  # def create
  #   @item = Item.new(item_params)
  #
  #   if @item.save
  #     render json: @item, status: :created, location: @item
  #   else
  #     render json: @item.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # PATCH/PUT /items/1
  # def update
  #   if @item.update(item_params)
  #     render json: @item
  #   else
  #     render json: @item.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # # DELETE /items/1
  # def destroy
  #   @item.destroy
  # end

  private
    def set_item
      @item = Item.find(params[:id])
    end

    # def item_params
    #   params.fetch(:item, {})
    # end
end
