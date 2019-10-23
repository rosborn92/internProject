require 'rails_helper'

RSpec.describe BookingsController, type: :controller do
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(200) # response.success?
    end

    it 'checks bookings being created in the response' do
      Booking.create(date: "10-22-19")
      get :index
      expect(response.body).to include("10-22-19") # response.success?
    end
  end

  context 'POST #create' do
    it 'can create a location' do
      post :create, params: { location: { date: "10-23-19" }, format: :json }
      expect(response.body).to include("10-23-19") # response.success?
    end
  end

  context 'PUT #update' do
    it 'can update a booking' do
      @booking = Booking.create(date: "10-22-19")
      patch :update, params: { id: @booking.id, booking: { date: "10-23-19" }, format: :json }
      expect(response.body).to include("10-22-19")
    end
  end

  context 'DELETE #delete' do
    it 'can delete a location' do
      @booking = Booking.create
      expect { delete :destroy, params: { id: @booking.id } }.to change {
        Booking.count
      }.by(-1)

      expect(response).to have_http_status(204)
    end
  end
end
