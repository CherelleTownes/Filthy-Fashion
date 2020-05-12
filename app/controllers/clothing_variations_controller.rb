class ClothingVariationsController < ApplicationController
  before_action :set_clothing_variation, only: [:show, :update, :destroy]

  # GET /clothing_variations
  def index
    @clothing_variations = ClothingVariation.all

    render json: @clothing_variations
  end

  # GET /clothing_variations/1
  def show
    render json: @clothing_variation
  end

  # POST /clothing_variations
  def create
    @clothing_variation = ClothingVariation.new(clothing_variation_params)

    if @clothing_variation.save
      render json: @clothing_variation, status: :created, location: @clothing_variation
    else
      render json: @clothing_variation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clothing_variations/1
  def update
    if @clothing_variation.update(clothing_variation_params)
      render json: @clothing_variation
    else
      render json: @clothing_variation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clothing_variations/1
  def destroy
    @clothing_variation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clothing_variation
      @clothing_variation = ClothingVariation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def clothing_variation_params
      params.require(:clothing_variation).permit(:description, :color, :category_id)
    end
end
