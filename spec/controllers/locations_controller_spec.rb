require 'rails_helper'

RSpec.describe LocationsController, type: :controller do
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to have_http_status(200) # response.success?
    end
    it 'checks location being created in the response' do
      Location.create(name: "Test Again")
      get :index
      expect(response.body).to include("Test Again") # response.success?
    end
  end

  context 'POST #create' do
    it 'can create a location' do
      post :create, params: { location: { name: "Bridget" }, format: :json }
      expect(response.body).to include("Bridget") # response.success?
    end
  end

  context 'PUT #update' do
    it 'can update a location' do
      @location = Location.create(name: "Test Again")
      patch :update, params: { id: @location.id, location: { name: "Andy" }, format: :json }
      expect(response.body).to include("Andy")
    end
  end

  context 'DELETE #delete' do
    it 'can delete a location' do
      @location = Location.create
      expect do
        delete :destroy, params: { id: @location.id }
      end.to change {
        Location.count
      }.by(-1)
      expect(response).to have_http_status(204)
    end
  end
end
