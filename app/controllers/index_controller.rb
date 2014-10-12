class IndexController < ApplicationController
  def home
    # @api_query = BlsPublicDataApi.new
  end

  def api_query
    public_data = BlsPublicDataApi.new(params[:series_id])
    api_query_return = public_data.query
    p api_query_return
    json_formatter = JsonFormatterForGraph.new(api_query_return)
    formatted_json_for_graphs = json_formatter.format
    p formatted_json_for_graphs
    render json: formatted_json_for_graphs
  end

  # private

  # def series_params
  #   params.require(:series).permit(:series_id)
  # end
end
