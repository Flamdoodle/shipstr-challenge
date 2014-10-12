class BlsPublicDataApi
  def initialize(series_id)
    @series_id = series_id
    @url = 'http://api.bls.gov/publicAPI/v1/timeseries/data/'
  end

  def query
    api_response = RestClient.post(@url, {'seriesid' => [@series_id]}.to_json, :content_type => 'application/json')
    parsed_api_response = JSON(api_response)
    format_api_response(parsed_api_response)
  end

  private

  def format_api_response(parsed_api_response)
    parsed_api_response["Results"]["series"][0]["data"]
  end
end
