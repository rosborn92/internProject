require 'rails_helper'

RSpec.describe BookingsController, type: :controller do
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(200) # response.success?
    end

    it 'can create a booking' do
      get :create
      expect(response).to have_http_status(200) # response.success?
    end
  end

  # context 'PUT #update' do
  #   it 'can update a booking' do
  #     patch :update
  #     expect(response).to have_http_status(200)
  #   end
  # end
  #   context 'DELETE #destroy' do
  #   it 'can delete a booking' do
  #     delete :destroy
  #     expect(response).to have_http_status(200)
  #   end
  # end
end
