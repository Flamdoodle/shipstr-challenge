class JsonFormatterForGraph
  def initialize(unformatted_json_from_api)
    @unformatted_json = unformatted_json_from_api
  end

  def format
    sanitized_json = @unformatted_json["Results"]["series"][0]["data"]
    dates = date_formatter(sanitized_json)
    index_values = value_formatter(sanitized_json)
    formatted_json = { dates: dates, values: index_values }
  end

  private

  def date_formatter(sanitized_json)
    dates = []
    sanitized_json.each do |month_values|
      dates << (month_values["periodName"] + " " + month_values["year"])
    end
    dates
  end

  def value_formatter(sanitized_json)
    index_values = []
    sanitized_json.each do |month_values|
      index_values << month_values["value"]
    end
    index_values
  end
end