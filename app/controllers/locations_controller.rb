class LocationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @locations = Location.all
    render json: @locations
  end

  def show
    @location = Location.find([params[:id]])
    render json: @location
  end

  def create
    @location = Location.create location_params
    render json: @location
  end

  def update
    @location = Location.find(params[:id])
    if @location.update(location_params)
      render json: @location
    else
      render json: { error: "could not update" }, status: 400
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
  end

  private

  def location_params
    params.require(:location).permit(:name, :location_type, :contact_first_name, :contact_last_name,
                                     :contact_phone_number, :contact_email, :contact_relationship,
                                     :address_1, :address_2, :address_city, :address_state,
                                     :address_zip, :phone_number, :reference,
                                     :school_principal, :principal_email, :school_district,
                                     :county_district, :city_district)
  end
end
