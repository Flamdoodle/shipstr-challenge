class IndexController < ApplicationController
  def home
    # @api_query = BlsPublicDataApi.new
  end

  def api_query
    public_data = BlsPublicDataApi.new(params[:series_id])
    api_query_return = public_data.query
    p api_query_return
    render json: api_query_return
  end

  # private

  # def series_params
  #   params.require(:series).permit(:series_id)
  # end
end
