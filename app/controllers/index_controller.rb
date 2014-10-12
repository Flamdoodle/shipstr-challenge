class IndexController < ApplicationController
  def home
  end

  def api_query
    public_data = BlsPublicDataApi.new(params[:series_id])
    api_query_return = public_data.query
    json_formatter = JsonFormatterForGraph.new(api_query_return)
    formatted_json_for_graphs = json_formatter.format
    render json: formatted_json_for_graphs
  end
end
