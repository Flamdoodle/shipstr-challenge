class IndexController < ApplicationController
  def home
    # @api_query = BlsPublicDataApi.new
  end

  def api_query
    p params[:series_id]
    api_query = BlsPublicDataApi.new(params[:series_id])
    api_query_return = api_query.create_client
    p api_query_return
    render json: { apiReturn: api_query_return }
  end

  # private

  # def series_params
  #   params.require(:series).permit(:series_id)
  # end
end
