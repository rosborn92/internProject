class BookingsController < ApplicationController
    def index
      @bookings = Booking.all
      render json: @bookings
    end

    def show
      @booking = Booking.find([params[:id]])
      render json: @booking
    end

    def create
      @booking = Booking.create
      render json: @booking
    end

    def update
      @booking = Booking.find(params[:id])
      if @booking.update(location_params)
        render :show
      else
        render json: {error: "could not update"}, status: 400
      end
    end

    def destroy
      @booking =Booking.find(params[:id])
      @booking.destroy
    end

  private

   def location_params
     params.require(:booking).permit(:location, :date, :contact_name,:contact_phone_number,:contact_email,:contact_relationship_to_location)
   end
  end
