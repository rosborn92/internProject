require 'rails_helper'

RSpec.describe BookingsController, type: :controller do
  let!(:location) { Location.create(name: "LEARN") }
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(200) # response.success?
    end

    it 'checks bookings being created in the response' do
      Booking.create(location_id: location.id, contact_name: "Nico")
      get :index
      expect(response.body).to include("Nico") # response.success?
    end
  end

  context 'POST #create' do
    it 'can create a booking' do
      post :create, params: { booking: { location_id: location.id,
                                         contact_name: "Nico" }, format: :json }
      expect(response.body).to include("Nico") # response.success?
    end
  end

  context 'PUT #update' do
    it 'can update a booking' do
      @booking = Booking.create(location_id: location.id, contact_name: "Nico")
      patch :update, params: { id: @booking.id, booking:
           { contact_name: "Adam" }, format: :json }
      expect(response.body).to include("Adam")
    end
  end

  context 'DELETE #delete' do
    it 'can delete a booking' do
      @booking = Booking.create(location_id: location.id, contact_name: "Nico")
      expect do
        delete :destroy, params: { location_id: location.id, id: @booking.id }
      end.to change {
        Booking.count
      }.by(-1)

      expect(response).to have_http_status(204)
    end
  end
end
