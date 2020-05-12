require 'test_helper'

class ClothingVariationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clothing_variation = clothing_variations(:one)
  end

  test "should get index" do
    get clothing_variations_url, as: :json
    assert_response :success
  end

  test "should create clothing_variation" do
    assert_difference('ClothingVariation.count') do
      post clothing_variations_url, params: { clothing_variation: { category_id: @clothing_variation.category_id, color: @clothing_variation.color, description: @clothing_variation.description } }, as: :json
    end

    assert_response 201
  end

  test "should show clothing_variation" do
    get clothing_variation_url(@clothing_variation), as: :json
    assert_response :success
  end

  test "should update clothing_variation" do
    patch clothing_variation_url(@clothing_variation), params: { clothing_variation: { category_id: @clothing_variation.category_id, color: @clothing_variation.color, description: @clothing_variation.description } }, as: :json
    assert_response 200
  end

  test "should destroy clothing_variation" do
    assert_difference('ClothingVariation.count', -1) do
      delete clothing_variation_url(@clothing_variation), as: :json
    end

    assert_response 204
  end
end
